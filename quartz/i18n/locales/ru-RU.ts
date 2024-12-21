import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "Без названия",
    description: "Описание отсутствует",
  },
  components: {
    callout: {
      note: "Заметка",
      abstract: "Суммируем",
      info: "Информация",
      todo: "Сделать",
      tip: "Подсказка",
      success: "Мы великолепны!",
      question: "Вопрос",
      warning: "Предупреждение",
      failure: "Ошибка",
      danger: "Осторожно!",
      bug: "Баг",
      example: "Пример",
      quote: "Цитата",
    },
    backlinks: {
      title: "Обратные ссылки",
      noBacklinksFound: "Ссылок нет",
    },
    themeToggle: {
      lightMode: "Светлая тема",
      darkMode: "Тёмная тема",
    },
    explorer: {
      title: "На этом сайте",
    },
    footer: {
      createdWith: "Создано с помощью",
    },
    graph: {
      title: "Граф",
    },
    recentNotes: {
      title: "Недавние заметки",
      seeRemainingMore: ({ remaining }) =>
        `Посмотреть оставш${getForm(remaining, "уюся", "иеся", "иеся")} ${remaining} →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `Переход из ${targetSlug}`,
      linkToOriginal: "Ссылка на оригинал",
    },
    search: {
      title: "Ctrl (Cmd) + K",
      searchBarPlaceholder: "Найти что-нибудь",
    },
    tableOfContents: {
      title: "На этой странице",
    },
    contentMeta: {
      readingTime: ({ minutes }) => `Читать ~${minutes} мин.`,
    },
  },
  pages: {
    rss: {
      recentNotes: "Недавние заметки",
      lastFewNotes: ({ count }) =>
        `Последн${getForm(count, "яя", "ие", "ие")} ${count} замет${getForm(count, "ка", "ки", "ок")}`,
    },
    error: {
      title: "Страница не найдена",
      notFound: "Эта страница закрыта или не существует",
      home: "Вернуться на главную страницу",
    },
    folderContent: {
      folder: "Папка",
      itemsUnderFolder: ({ count }) =>
        `в этой папке ${count} заме${getForm(count, "тка", "тки", "ток")}`,
    },
    tagContent: {
      tag: "Тег",
      tagIndex: "Теги",
      itemsUnderTag: ({ count }) => `с этим тегом ${count} заме${getForm(count, "тка", "тки", "ток")}`,
      showingFirst: ({ count }) =>
        `Показыва${getForm(count, "ется", "ются", "ются")} ${count} тег${getForm(count, "", "а", "ов")}`,
      totalTags: ({ count }) => `Всего ${count} тег${getForm(count, "", "а", "ов")}`,
    },
  },
} as const satisfies Translation

function getForm(number: number, form1: string, form2: string, form5: string): string {
  const remainder100 = number % 100
  const remainder10 = remainder100 % 10

  if (remainder100 >= 10 && remainder100 <= 20) return form5
  if (remainder10 > 1 && remainder10 < 5) return form2
  if (remainder10 == 1) return form1
  return form5
}
