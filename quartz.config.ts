import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Lokhmatoff",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "ru-RU",
    baseUrl: "lokhmatoff.space",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "JetBrains Mono",
        body: "JetBrains Mono",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          // Kanagawa Theme
          light: "#1F1F28",
          lightgray: "#2A2A37",
          gray: "#666666",
          darkgray: "#CFC8A0",
          dark: "#DCD7BA",
          secondary: "#7FB4CA",
          tertiary: "#EB8947",
          highlight: "#111111",
          // Rose Pine Dawn
          // light: "#FAF4ED",
          // lightgray: "#F2E9E1",
          // gray: "#9893A5",
          // darkgray: "#575279",
          // dark: "#3C3857",
          // secondary: "#286983",
          // tertiary: "#D7827E",
          // highlight: "#EAE4DD",
          // TokyoNight Light Theme
          // light: "#CBCCD1",
          // lightgray: "#B2B4BD",
          // gray: "#828594",
          // darkgray: "#4C505E",
          // dark: "#333847",
          // secondary: "#34548A",
          // tertiary: "#9D5543",
          // highlight: "#D1D3DE",
        },
        darkMode: {
          // Kanagawa Theme
          light: "#1F1F28",
          lightgray: "#2A2A37",
          gray: "#666666",
          darkgray: "#CFC8A0",
          dark: "#DCD7BA",
          secondary: "#7FB4CA",
          tertiary: "#EB8947",
          highlight: "#111111",
          // Space Gray Theme
          // light: "#20242D",
          // lightgray: "#323642",
          // gray: "#647284",
          // darkgray: "#B3B8C3",
          // dark: "#ffffff",
          // secondary: "#7D8FA4",
          // tertiary: "#BA6B4F",
          // highlight: "#16181E",
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
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "vitesse-dark",
          dark: "vitesse-dark",
        },
        keepBackground: true,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
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
