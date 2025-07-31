import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Lokhmatoff Space",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "ru-RU",
    baseUrl: "lokhmatoff.space",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    generateSocialImages: false,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        // header: "Inter Tight",
        // body: "Inter Tight",
        header: "Manrope",
        body: "Manrope",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#e5e5e5",
          lightgray: "#d4d4d4",
          gray: "#737373",
          darkgray: "#262626",
          dark: "#0a0a0a",
          secondary: "#0e7490",
          tertiary: "#c2410c",
          highlight: "#fafafa",
          textHighlight: "#c2410c60",
        },
        darkMode: {
          light: "#0a0a0a",
          lightgray: "#171717",
          gray: "#737373",
          darkgray: "#d4d4d4",
          dark: "#fafafa",
          secondary: "#22D3EE",
          tertiary: "#FB923C",
          highlight: "#262626",
          textHighlight: "#FB923C60",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "vitesse-light",
          dark: "vitesse-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest", externalLinkIcon: true, openLinksInNewTab: true }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
