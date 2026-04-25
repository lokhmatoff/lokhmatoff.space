import { pathToRoot, slugTag } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const TagList: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const tags = fileData.frontmatter?.tags
  const baseDir = pathToRoot(fileData.slug!)
  if (tags && tags.length > 0) {
    return (
      <ul class={classNames(displayClass, "tags")}>
        {tags.map((tag) => {
          const linkDest = baseDir + `/tags/${slugTag(tag)}`
          return (
            <li>
              <a href={linkDest} class="internal tag-link">
                {tag}
              </a>
            </li>
          )
        })}
      </ul>
    )
  } else {
    return null
  }
}

TagList.css = `
.tags {
  list-style: none;
  display: flex;
  padding-left: 0;
  gap: var(--space-2);
  margin: 1rem 0;
  flex-wrap: wrap;
}

.section-li > .section > .tags {
  justify-content: flex-end;
}
  
.tags > li {
  display: inline-block;
  white-space: nowrap;
  margin: 0;
  overflow-wrap: normal;
}

a.internal.tag-link {
  border-radius: var(--radius-sm);
  background-color: color-mix(in srgb, var(--bg-elevated) 72%, var(--accent) 28%);
  border: 1px solid var(--border);
  color: var(--text);
  padding: 0.2rem 0.5rem;
  margin: 0;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease;
}

a.internal.tag-link:hover,
a.internal.tag-link:focus-visible {
  border-color: var(--border-strong);
  background: color-mix(in srgb, var(--bg-elevated) 58%, var(--accent) 42%);
}
`

export default (() => TagList) satisfies QuartzComponentConstructor
