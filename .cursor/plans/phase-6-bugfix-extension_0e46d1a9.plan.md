---
name: phase-6-bugfix-extension
overview: "Закрыть 4 новых бага поверх текущего прохода: вертикальные отступы title/meta и toc/content, пересобрать callout-палитру под Flexoki-адаптацию, заменить GitHub-подсветку на Flexoki (fallback на Vitesse) и подтвердить результат проверками."
todos:
  - id: fix-meta-spacing
    content: Исправить вертикальный отступ между hero/title и бейджами метаданных
    status: completed
  - id: fix-toc-content-gap
    content: Уменьшить расстояние между блоком оглавления и контентом статьи
    status: completed
  - id: retune-callouts-flexoki
    content: Перенастроить callout-цвета с Everforest на Flexoki-согласованную палитру
    status: completed
  - id: switch-syntax-theme
    content: Заменить GitHub syntax theme на Flexoki, с fallback на Vitesse при несовместимости
    status: completed
  - id: run-validation
    content: Прогнать check/test/build и визуальный smoke-check по 4 пунктам
    status: completed
isProject: false
---

# План фикса новых багов (Phase 6 Extension)

## Контекст и подтверждённые факты
- В метаданных статьи стоит `margin-top: 0`, из-за чего нет зазора после hero/title: [`/home/lokhmatoff/Work/Personal/lokhmatoff.space/quartz/components/styles/contentMeta.scss`](/home/lokhmatoff/Work/Personal/lokhmatoff.space/quartz/components/styles/contentMeta.scss).
- Для TOC присутствуют собственные отступы у списка (`margin: 0.5rem 0`), а также общий поток `beforeBody`, из-за чего разрыв с контентом заметен: [`/home/lokhmatoff/Work/Personal/lokhmatoff.space/quartz/components/styles/toc.scss`](/home/lokhmatoff/Work/Personal/lokhmatoff.space/quartz/components/styles/toc.scss), [`/home/lokhmatoff/Work/Personal/lokhmatoff.space/quartz.layout.ts`](/home/lokhmatoff/Work/Personal/lokhmatoff.space/quartz.layout.ts).
- В callout включён блок цветов Everforest: [`/home/lokhmatoff/Work/Personal/lokhmatoff.space/quartz/styles/callouts.scss`](/home/lokhmatoff/Work/Personal/lokhmatoff.space/quartz/styles/callouts.scss).
- Подсветка кода сейчас GitHub (`github-light`/`github-dark`): [`/home/lokhmatoff/Work/Personal/lokhmatoff.space/quartz.config.ts`](/home/lokhmatoff/Work/Personal/lokhmatoff.space/quartz.config.ts).

## Фаза A — Вертикальный ритм title/meta и hero/meta
- Добавить контролируемый верхний отступ у `.content-meta`, чтобы:
  - на главной появился зазор между hero и бейджами;
  - на обычных статьях появился зазор между заголовком и бейджами.
- Проверить, чтобы это не ломало list/folder страницы (где мета может идти рядом с другими блоками).

### Файлы
- [`/home/lokhmatoff/Work/Personal/lokhmatoff.space/quartz/components/styles/contentMeta.scss`](/home/lokhmatoff/Work/Personal/lokhmatoff.space/quartz/components/styles/contentMeta.scss)
- (при необходимости точечно) [`/home/lokhmatoff/Work/Personal/lokhmatoff.space/quartz/styles/base.scss`](/home/lokhmatoff/Work/Personal/lokhmatoff.space/quartz/styles/base.scss)

## Фаза B — Уменьшить разрыв между TOC и контентом
- Уменьшить локальные вертикальные отступы TOC-контейнера/внутреннего списка.
- При необходимости добавить явную компактную связку между `TableOfContents` и следующим блоком контента (без глобального уменьшения всех отступов в `beforeBody`).

### Файлы
- [`/home/lokhmatoff/Work/Personal/lokhmatoff.space/quartz/components/styles/toc.scss`](/home/lokhmatoff/Work/Personal/lokhmatoff.space/quartz/components/styles/toc.scss)
- (только если потребуется) [`/home/lokhmatoff/Work/Personal/lokhmatoff.space/quartz/styles/base.scss`](/home/lokhmatoff/Work/Personal/lokhmatoff.space/quartz/styles/base.scss)

## Фаза C — Перекрасить callout под Flexoki-адаптацию
- Заменить активные Everforest-callout переменные на значения, согласованные с текущей нейтральной тёплой базой:
  - обновить `--callout-color-*`;
  - обновить `--callout-bgcolor-*` с умеренной прозрачностью.
- Сохранить текущую семантику типов (`info`, `warning`, `danger`, `quote`, и т.д.) и иконки.

### Файлы
- [`/home/lokhmatoff/Work/Personal/lokhmatoff.space/quartz/styles/callouts.scss`](/home/lokhmatoff/Work/Personal/lokhmatoff.space/quartz/styles/callouts.scss)

## Фаза D — Смена темы подсветки кода
- Поменять `Plugin.SyntaxHighlighting.theme`:
  - сначала попытка `flexoki-light` / `flexoki-dark`;
  - если тема не поддержана текущей версией Shiki — fallback на `vitesse-light` / `vitesse-dark`.
- Сохранить `keepBackground: false`, чтобы подсветка оставалась в текущем surface-language.

### Файлы
- [`/home/lokhmatoff/Work/Personal/lokhmatoff.space/quartz.config.ts`](/home/lokhmatoff/Work/Personal/lokhmatoff.space/quartz.config.ts)

## Фаза E — Валидация и визуальная приёмка
- Автопроверки:
  - `npm run check`
  - `npm run test`
  - `npm run quartz -- build`
- Визуальный smoke-check:
  - Главная: hero ↔ meta spacing.
  - Статья с TOC: TOC ↔ content spacing.
  - Несколько типов callout в light/dark.
  - Code blocks в light/dark на контенте со сложной подсветкой.
- Обновить baseline capture при необходимости и коротко зафиксировать результат в docs/redesign-отчёте.

## Критерии готовности
- Есть видимый и стабильный зазор между title/hero и метаданными.
- Разрыв TOC и основного контента уменьшен до комфортного уровня.
- Callout-палитра не выглядит «остатком Everforest» и согласована с Flexoki-направлением.
- GitHub-подсветка убрана; применена Flexoki-пара или автоматически подтверждённый fallback `vitesse-light/dark`.