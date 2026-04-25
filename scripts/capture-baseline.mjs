import { mkdir, writeFile } from "node:fs/promises"
import { existsSync } from "node:fs"
import { spawn } from "node:child_process"
import path from "node:path"
import process from "node:process"

const repoRoot = process.cwd()
const outRoot = path.join(repoRoot, "docs", "redesign", "baseline")
const baseUrl = "http://127.0.0.1:8080"

const pages = [
  { key: "home", route: "/" },
  { key: "tags", route: "/tags" },
  { key: "wishlist", route: "/wishlist" },
  { key: "article", route: "/MermaidJS" },
  { key: "search-overlay", route: "/", mode: "search-overlay" },
]

const viewports = {
  desktop: { width: 1440, height: 900 },
  mobile: { width: 390, height: 844 },
}

const themes = ["light", "dark"]

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function ensureDirs() {
  for (const theme of themes) {
    for (const viewportName of Object.keys(viewports)) {
      await mkdir(path.join(outRoot, theme, viewportName), { recursive: true })
    }
  }
}

async function waitForServerReady(timeoutMs = 120000) {
  const started = Date.now()
  while (Date.now() - started < timeoutMs) {
    try {
      const res = await fetch(baseUrl)
      if (res.ok) return
    } catch {
      // keep polling
    }
    await wait(1000)
  }

  throw new Error(`Quartz server did not become ready within ${timeoutMs}ms`)
}

async function withPlaywright(run) {
  let playwright
  try {
    playwright = await import("playwright")
  } catch {
    throw new Error(
      "Playwright is not installed. Run: npm i -D playwright && npx playwright install chromium",
    )
  }

  return run(playwright)
}

async function setTheme(page, theme) {
  await page.evaluate((nextTheme) => {
    const html = document.documentElement
    html.setAttribute("saved-theme", nextTheme)
    html.setAttribute("data-theme", nextTheme)
    localStorage.setItem("theme", nextTheme)
  }, theme)
}

async function openSearchOverlay(page) {
  const searchButton = page.locator("#search-button")
  const searchContainer = page.locator("#search-container")
  const searchBar = page.locator("#search-bar")
  const searchLayout = page.locator("#search-layout")

  await searchButton.click()
  await searchContainer.waitFor({ state: "visible", timeout: 10000 })
  await searchBar.fill("mermaid")
  await searchLayout.waitFor({ state: "visible", timeout: 10000 })
}

async function captureAll() {
  await ensureDirs()

  await withPlaywright(async ({ chromium }) => {
    const browser = await chromium.launch({
      executablePath: process.env.PLAYWRIGHT_CHROMIUM_PATH || "/usr/bin/chromium",
      headless: true,
    })
    const context = await browser.newContext()
    const page = await context.newPage()

    for (const theme of themes) {
      for (const [viewportName, viewport] of Object.entries(viewports)) {
        await page.setViewportSize(viewport)

        for (const pageMeta of pages) {
          await page.goto(`${baseUrl}${pageMeta.route}`, { waitUntil: "domcontentloaded", timeout: 60000 })
          await setTheme(page, theme)
          await page.reload({ waitUntil: "domcontentloaded", timeout: 60000 })
          await wait(1000)
          if (pageMeta.mode === "search-overlay") {
            await openSearchOverlay(page)
          }

          const outPath = path.join(outRoot, theme, viewportName, `${pageMeta.key}.png`)
          await page.screenshot({ path: outPath, fullPage: true })
        }
      }
    }

    await browser.close()
  })
}

async function run() {
  const serve = spawn("npm", ["run", "quartz", "--", "build", "--serve"], {
    cwd: repoRoot,
    stdio: "pipe",
    env: process.env,
  })

  const logs = []
  const appendLog = (chunk) => {
    logs.push(String(chunk))
  }
  serve.stdout.on("data", appendLog)
  serve.stderr.on("data", appendLog)

  try {
    await waitForServerReady()
    await captureAll()

    const captureMeta = {
      generatedAt: new Date().toISOString(),
      baseUrl,
      pages,
      viewports,
      themes,
    }
    await writeFile(
      path.join(outRoot, "capture-meta.json"),
      `${JSON.stringify(captureMeta, null, 2)}\n`,
      "utf8",
    )
  } finally {
    if (serve.pid && existsSync(`/proc/${serve.pid}`)) {
      serve.kill("SIGTERM")
      await wait(1000)
      if (existsSync(`/proc/${serve.pid}`)) {
        serve.kill("SIGKILL")
      }
    }
    await writeFile(path.join(outRoot, "capture.log"), logs.join(""), "utf8")
  }
}

run().catch((err) => {
  console.error(err)
  process.exitCode = 1
})
