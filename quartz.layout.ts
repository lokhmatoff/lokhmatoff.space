import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.Graph(),
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/lokhmatoff",
      Telegram: "https://t.me/lokhmatoff",
      "Паблик VK": "https://vk.com/lokhmatoffgames",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.TableOfContents(),
  ],
  right: [
    Component.Backlinks(),
    Component.RecentNotes({
      limit: 5,
      title: 'Новое на сайте',
    }),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.TableOfContents(),
  ],
  right: [
    Component.Backlinks(),
    Component.RecentNotes({
      limit: 5,
      title: 'Новое на сайте',
    }),
  ],
}
