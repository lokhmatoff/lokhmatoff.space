import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/headerLinks.scss"

interface Options {
  links: Record<string, string>
}

export default((opts?: Options) => {
    const HeaderLinks: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
        const links = opts?.links ?? []

        return (
            <ul class="header-links">
                {Object.entries(links).map(([text, link]) => (
                    <li>
                        <a href={link} target={link.startsWith('http') ? '_blank' : '_self'} rel={link.startsWith("http") ? "noreferrer noopener" : undefined}>{text}</a>
                    </li>
                ))}
            </ul>
        )
    }

    HeaderLinks.css = style
    return HeaderLinks
}) satisfies QuartzComponentConstructor