import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"
// import { colors } from "./quartz/themes/dracula"
import { colors } from "./quartz/themes/nord"
// import { colors } from "./quartz/themes/gruvbox"

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
      colors: colors,
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        // Default syntax theme
        // theme: {
        //   light: "vitesse-light",
        //   dark: "vitesse-dark",
        // },
        // keepBackground: false,
        // Dracula syntax theme
        // theme: {
        //   light: "dracula",
        //   dark: "dracula",
        // },
        // keepBackground: true,
        // Nord syntax theme
        theme: {
          light: "nord",
          dark: "nord",
        },
        keepBackground: true,
        // Gruvbox syntax theme
        // theme: {
        //   light: "everforest-light",
        //   dark: "everforest-dark",
        // },
        // keepBackground: false,
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
