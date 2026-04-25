import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <a href={baseDir} class={classNames(displayClass, "page-title")}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="title-icon"
          d="M25.642 17.7432C22.4981 20.8871 17.4008 20.8871 14.2568 17.7432C11.1129 14.5992 11.1129 9.5019 14.2568 6.35796C17.4008 3.21401 22.4981 3.21401 25.642 6.35796C28.786 9.5019 28.786 14.5992 25.642 17.7432Z"
        />
        <path
          class="title-icon"
          d="M8.5642 24.8589L12.8337 20.5895C13.2267 20.1965 13.2267 19.5593 12.8337 19.1663C12.4407 18.7733 11.8035 18.7733 11.4105 19.1663L7.14105 23.4358C6.74806 23.8288 6.74806 24.466 7.14105 24.8589C7.53404 25.2519 8.17121 25.2519 8.5642 24.8589Z"
        />
        <path
          class="title-icon"
          d="M17.1031 22.0126L12.8337 26.2821C12.4407 26.6751 12.4407 27.3123 12.8337 27.7053C13.2267 28.0982 13.8638 28.0982 14.2568 27.7053L18.5263 23.4358C18.9193 23.0428 18.9193 22.4056 18.5263 22.0126C18.1333 21.6196 17.4961 21.6196 17.1031 22.0126Z"
        />
        <path
          class="title-icon"
          d="M9.98736 14.8969L5.7179 19.1663C5.3249 19.5593 4.68774 19.5593 4.29474 19.1663C3.90175 18.7733 3.90175 18.1362 4.29474 17.7432L8.5642 13.4737C8.9572 13.0807 9.59436 13.0807 9.98736 13.4737C10.3804 13.8667 10.3804 14.5039 9.98736 14.8969Z"
        />
      </svg>
    </a>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1rem;
  box-sizing: border-box;
  display: block;
  margin: 0;
  line-height: 0.75rem;
}

.title-icon {
  fill: var(--secondary);
}

.page-title:hover .title-icon {
  fill: var(--tertiary);
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
