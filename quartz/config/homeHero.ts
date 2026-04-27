export type HeroAction = {
  label: string
  href: string
}

export interface HomeHeroConfig {
  eyebrow: string
  title: string
  description: string
  primaryCta: HeroAction
  secondaryCta?: HeroAction
}

export const homeHeroConfig: HomeHeroConfig = {
  eyebrow: "/index",
  title: "Lokhmatoff Space",
  description: "Персональное пространство — веб-блокнот с заметками, наблюдениями и постами.",
  primaryCta: {
    label: "Заметки по тегам",
    href: "/tags",
  },
  secondaryCta: {
    label: "Новый Цеттелькастен",
    href: "/zettels/2604230000-Заметки",
  },
}
