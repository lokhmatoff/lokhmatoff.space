import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import style from "./styles/homeHero.scss"

type HeroAction = {
  label: string
  href: string
}

interface HomeHeroOptions {
  title: string
  description: string
  primaryCta: HeroAction
  secondaryCta?: HeroAction
}

const defaultOptions: HomeHeroOptions = {
  title: "Lokhmatoff Space",
  description: "Персональное пространство с заметками, идеями и проектами.",
  primaryCta: {
    label: "Читать заметки",
    href: "/",
  },
  secondaryCta: {
    label: "Обо мне",
    href: "/about",
  },
}

export default ((opts?: Partial<HomeHeroOptions>) => {
  const options: HomeHeroOptions = { ...defaultOptions, ...opts }

  const HomeHero: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    if (fileData.slug !== "index") {
      return null
    }

    return (
      <section class={classNames(displayClass, "home-hero")} aria-label="Homepage hero">
        <div class="home-hero-content">
          <p class="home-hero-eyebrow">Lokhmatoff Space</p>
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
