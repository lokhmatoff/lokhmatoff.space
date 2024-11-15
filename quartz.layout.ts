import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.MobileOnly(Component.PageTitle()),
    Component.DesktopOnly(Component.Search()),
    Component.DesktopOnly(Component.Spacer()),
    // Component.Darkmode(),
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/lokhmatoff",
      Telegram: "https://t.me/lokhmatoff",
      YouTube: "https://youtube.com/@lokhmatoff",
    },
  }),
  afterBody: [],
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.MobileOnly(Component.Search()),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    Component.MobileOnly(Component.TableOfContents()),
  ],
  left: [
    Component.DesktopOnly(Component.PageTitle()),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.DesktopOnly(Component.RecentNotes({
      limit: 5,
    })),
    // Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.MobileOnly(Component.RecentNotes({
      limit: 5,
    })),
    Component.Graph({
      localGraph: {
        showTags: false,
      },
      globalGraph: {
        showTags: false,
      }
    }),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.MobileOnly(Component.Search()),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],
  left: [
    Component.DesktopOnly(Component.PageTitle()),
    Component.DesktopOnly(Component.RecentNotes({
      limit: 10,
    })),
  ],
  right: [
    Component.MobileOnly(Component.RecentNotes({
      limit: 10,
    })),
    Component.Graph({
      localGraph: {
        showTags: false,
        centerForce: 0.9,
        repelForce: 20,
        linkDistance: 30,
      },
      globalGraph: {
        showTags: false,
        centerForce: 0.9,
        repelForce: 20,
        linkDistance: 30,
      }
    }),
    Component.Backlinks(),
  ],
}
