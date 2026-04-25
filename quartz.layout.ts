import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.PageTitle(),
    Component.Search(),
    Component.DesktopOnly(Component.HeaderLinks({
      links: {
        "Обо мне": "/about",
        "Проекты": "/projects",
        // "Сейчас": "/now",
      }
    })),
    Component.Darkmode(),
  ],
  afterBody: [
    Component.Backlinks(),
    Component.Graph({
      localGraph: {
        linkDistance: 50,
      },
      globalGraph: {
        repelForce: 5,
        centerForce: 1,
        linkDistance: 50,
      }
    }),
    Component.RecentNotes({ limit: 5 }),
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/lokhmatoff",
      Telegram: "https://t.me/lokhmatoff",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.HomeHero({
      title: "Lokhmatoff Space",
      description: "Персональное пространство с заметками, интересными задачами и проектами.",
      primaryCta: {
        label: "Читать заметки",
        href: "/tags",
      },
      secondaryCta: {
        label: "Обо мне",
        href: "/about",
      },
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    Component.TableOfContents()
  ],
  left: [],
  right: [],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle(), Component.ContentMeta(), Component.TableOfContents()],
  left: [],
  right: [],
}
