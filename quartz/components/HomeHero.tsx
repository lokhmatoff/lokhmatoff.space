import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import style from "./styles/homeHero.scss"
import { homeHeroConfig, type HomeHeroConfig } from "../config/homeHero"

export default ((opts?: Partial<HomeHeroConfig>) => {
  const options: HomeHeroConfig = { ...homeHeroConfig, ...opts }

  const HomeHero: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    if (fileData.slug !== "index") {
      return null
    }

    return (
      <section class={classNames(displayClass, "home-hero")} aria-label="Homepage hero">
        <div class="home-hero-content">
          <p class="home-hero-eyebrow">{options.eyebrow}</p>
          <h1 class="home-hero-title">{options.title}</h1>
          <p class="home-hero-description">{options.description}</p>
          <div class="home-hero-actions">
            <a class="home-hero-primary" href={options.primaryCta.href}>
              {options.primaryCta.label}
            </a>
            {options.secondaryCta && (
              <a class="home-hero-secondary" href={options.secondaryCta.href}>
                {options.secondaryCta.label}
              </a>
            )}
          </div>
        </div>
      </section>
    )
  }

  HomeHero.css = style
  return HomeHero
}) satisfies QuartzComponentConstructor
