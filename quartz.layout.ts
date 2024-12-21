import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.PageTitle(),
    Component.Spacer(),
    Component.Search(),
    Component.Darkmode(),
  ],
  afterBody: [
    Component.Backlinks(),
    Component.Graph(),
    Component.RecentNotes({
      limit: 5,
    }),
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
    Component.Breadcrumbs({
      spacerSymbol: '/',
      showCurrentPage: false,
      rootName: 'Главная',
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    Component.TableOfContents(),
  ],
  left: [],
  right: [],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs({
      spacerSymbol: '/',
      showCurrentPage: false,
      rootName: 'Главная',
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    Component.TableOfContents(),
  ],
  left: [],
  right: [],
}
