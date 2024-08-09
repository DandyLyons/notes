import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// see: https://quartz.jzhao.xyz/features/explorer
const MyExplorer = Component.Explorer({
  title: "Explorer",
  folderClickBehavior: "link",
  folderDefaultState: "collapsed",
  useSavedState: true,
  // sortFn: (a, b) => {
    // implement sortFn here
  // },
  filterFn: (node) => node.name !== "tags", //filter out "tags" folder
  // mapFn: undefined,
  order: ["filter", "map", "sort"], // what order to apply functions in
})

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
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
    Component.DesktopOnly(MyExplorer),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}



// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(MyExplorer),
  ],
  right: [],
}
