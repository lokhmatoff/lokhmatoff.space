import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "Без названия",
    description: "Описание отсутствует",
  },
  components: {
    callout: {
      note: "Заметка",
      abstract: "Резюме",
      info: "Инфо",
      todo: "Сделать",
      tip: "Подсказка",
      success: "Успех",
      question: "Вопрос",
      warning: "Предупреждение",
      failure: "Неудача",
      danger: "Опасность",
      bug: "Баг",
      example: "Пример",
      quote: "Цитата",
    },
    backlinks: {
      title: "Обратные ссылки",
      noBacklinksFound: "Нет обратных ссылок",
    },
    themeToggle: {
      lightMode: "Светлая тема",
      darkMode: "Тёмная тема",
    },
    explorer: {
      title: "Проводник",
    },
    footer: {
      createdWith: "Этот сайт создан с помощью",
    },
    graph: {
      title: "Граф",
    },
    recentNotes: {
      title: "Новое на сайте",
      seeRemainingMore: ({ remaining }) =>
        `К оставш${getForm(remaining, "ейся", "имся", "имся")} ${remaining} →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `Переход из ${targetSlug}`,
      linkToOriginal: "Ссылка на оригинал",
    },
    search: {
      title: "Поиск",
      searchBarPlaceholder: "Найти что-нибудь",
    },
    tableOfContents: {
      title: "Оглавление",
    },
    contentMeta: {
      readingTime: ({ minutes }) => `читать ~${minutes} мин.`,
    },
  },
  pages: {
    rss: {
      recentNotes: "Новое на сайте",
      lastFewNotes: ({ count }) =>
        `Новейш${getForm(count, "ая", "ие", "ие")} ${count} замет${getForm(count, "ка", "ки", "ок")}`,
    },
    error: {
      title: "Страница не найдена",
      notFound: "Такой страницы нет или она в приватной зоне",
      home: "Вернуться в индекс",
    },
    folderContent: {
      folder: "Директория",
      itemsUnderFolder: ({ count }) =>
        `содержит ${count} замет${getForm(count, "ку", "ки", "ок")}`,
    },
    tagContent: {
      tag: "Тег",
      tagIndex: "Теги",
      itemsUnderTag: ({ count }) => `${count} замет${getForm(count, "ка", "ки", "ок")} с этим тегом`,
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
