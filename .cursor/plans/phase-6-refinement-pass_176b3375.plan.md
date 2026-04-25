---
name: phase-6-refinement-pass
overview: "Закрыть выявленные расхождения после аудита и провести второй проход визуальной системы: типографика Geist, нейтрализация палитры в духе Flexoki, уменьшение визуальной плотности до уровня Cursor Docs / shadcn, плюс фиксы popover-in-callout и ширины footer."
todos:
  - id: spec-fixes-hero-check
    content: "Закрыть несоответствия спеки: единый источник hero-copy и зелёный npm run check"
    status: completed
  - id: typography-geist
    content: Перевести проект на Geist/Geist Mono и уменьшить базовый типографический масштаб
    status: completed
  - id: palette-flexoki
    content: Адаптировать нейтральную палитру в духе Flexoki без нарушения token-first
    status: completed
  - id: density-surface-tuning
    content: Снизить визуальную крупность desktop-компонентов при сохранении accessibility
    status: completed
  - id: bugfix-popover-callout
    content: Исправить фон/границы popover для ссылок внутри callout
    status: completed
  - id: bugfix-footer-width
    content: Исправить несоответствие ширины footer относительно header и hero
    status: completed
  - id: validate-and-baseline
    content: Прогнать проверки, baseline capture и финальный smoke-check
    status: completed
isProject: false
---

# Многофазный план доработок после аудита

## Цели прохода
- Закрыть формальные несоответствия текущей реализации `REDESIGN_SPEC.md`.
- Сдвинуть стиль к более нейтральному, компактному и документному виду (референсы: [Flexoki](https://stephango.com/flexoki), [shadcn docs](https://ui.shadcn.com/docs), [Cursor docs](https://cursor.com/docs/get-started/quickstart)).
- Сохранить token-first архитектуру и не вносить ломающих изменений в Quartz layout/рендеринг.

## Фаза 1 — Спек-фикс и quality gate

### Что делаем
- Приводим hero к принципу «один источник текста»:
  - оставляем один конфиг hero в [`quartz.layout.ts`](quartz.layout.ts);
  - в [`quartz/components/HomeHero.tsx`](quartz/components/HomeHero.tsx) убираем расходящиеся дефолты/хардкод (`eyebrow`) и читаем всё из одного источника.
- Возвращаем `npm run check` в зелёное состояние:
  - фиксируем стратегию форматирования (полный `prettier --write` либо ограничение scope через [`.prettierignore`](.prettierignore) и уточнение скрипта в [`package.json`](package.json));
  - выбираем минимально шумный, но устойчивый вариант для CI.

### Критерии готовности
- Hero-copy не дублируется и не расходится между файлами.
- `npm run check` проходит локально без ручных обходов.

## Фаза 2 — Типографика: Geist / Geist Mono + компактный масштаб

### Что делаем
- Переключаем шрифты на Google Fonts:
  - `body/header` → Geist;
  - `code` → Geist Mono.
- Обновляем типографический масштаб и вертикальный ритм в сторону более компактного документационного вида:
  - базовые размеры/line-height/heading scale в [`quartz/styles/base.scss`](quartz/styles/base.scss);
  - интервалы и системные спейсы в [`quartz/styles/custom.scss`](quartz/styles/custom.scss) и при необходимости [`quartz/styles/variables.scss`](quartz/styles/variables.scss).
- Проверяем, что загрузка шрифтов остаётся корректной через текущий pipeline:
  - конфиг в [`quartz.config.ts`](quartz.config.ts);
  - генерация font CSS в [`quartz/util/theme.ts`](quartz/util/theme.ts);
  - подключение в [`quartz/components/Head.tsx`](quartz/components/Head.tsx).

### Критерии готовности
- На desktop/mobile типографика визуально компактнее, но читаемость не проседает.
- Кодовые блоки и inline code остаются различимыми и контрастными.

## Фаза 3 — Нейтрализация палитры через Flexoki-адаптацию

### Что делаем
- Адаптируем палитру к более нейтральной/«ink-on-paper» модели:
  - переносим базовые тональные шаги в [`quartz/themes/everforest.ts`](quartz/themes/everforest.ts) (или выделяем новый theme-файл и подключаем его в [`quartz.config.ts`](quartz.config.ts));
  - сохраняем token-first маппинг в [`quartz/styles/custom.scss`](quartz/styles/custom.scss) (`--bg`, `--bg-elevated`, `--text`, `--border`, `--accent`, `--ring`).
- Снижаем «синюю доминанту» в интерактиве:
  - аккуратно ребалансируем `secondary/tertiary/highlight/textHighlight` в теме;
  - проверяем компоненты с сильной зависимостью от `--accent` (ссылки, ring, chips, hover states).
- (Опционально в конце) корректируем syntax highlighting тему в [`quartz.config.ts`](quartz.config.ts), если она визуально конфликтует с новой базой.

### Критерии готовности
- Палитра воспринимается нейтральной в light/dark.
- Акцент помогает навигации, но не доминирует.

## Фаза 4 — Уменьшение визуальной «крупности» на desktop

### Что делаем
- Системно уменьшаем размеры surfaces и контролов (без потери accessibility):
  - высоты/паддинги/радиусы в [`quartz/components/Header.tsx`](quartz/components/Header.tsx), [`quartz/components/styles/search.scss`](quartz/components/styles/search.scss), [`quartz/components/styles/footer.scss`](quartz/components/styles/footer.scss), [`quartz/components/styles/homeHero.scss`](quartz/components/styles/homeHero.scss), [`quartz/components/styles/listPage.scss`](quartz/components/styles/listPage.scss), [`quartz/components/styles/recentNotes.scss`](quartz/components/styles/recentNotes.scss), [`quartz/components/styles/headerLinks.scss`](quartz/components/styles/headerLinks.scss), [`quartz/components/styles/darkmode.scss`](quartz/components/styles/darkmode.scss).
- Сохраняем минимальные accessible target sizes и видимый `focus-visible`.

### Критерии готовности
- На desktop интерфейс визуально ближе к shadcn/cursor docs по плотности.
- На mobile не появляется «мелкость» и проблемные зоны клика.

## Фаза 5 — Точечные багфиксы UI

### Баг A: popover внутри callout получает цветной полупрозрачный фон
- Причина: конфликт CSS-переменных `--bg`/`--border` из callout-контекста.
- Исправление:
  - локально отвязываем popover chrome от callout-переменных в [`quartz/components/styles/popover.scss`](quartz/components/styles/popover.scss);
  - при необходимости минимально уточняем callout tokens в [`quartz/styles/callouts.scss`](quartz/styles/callouts.scss), не ломая текущие callout-варианты.

### Баг B: footer на desktop шире header/hero
- Исправление:
  - нормализуем box model (`box-sizing: border-box`) и выравнивание контейнеров в [`quartz/components/styles/footer.scss`](quartz/components/styles/footer.scss), [`quartz/components/Header.tsx`](quartz/components/Header.tsx), при необходимости точечно в [`quartz/styles/base.scss`](quartz/styles/base.scss).

### Критерии готовности
- Popover в callout выглядит как обычный popover страницы (без цветного подложенного фона callout).
- Ширина footer визуально совпадает с header/hero на desktop.

## Фаза 6 — Валидация, baseline и приёмка

### Автопроверки
- `npx tsc --noEmit`
- `npm run test`
- `npm run check`
- `npm run quartz -- build`
- `node scripts/capture-baseline.mjs`

### Ручной smoke-check
- Light/dark parity ключевых страниц (`/`, `/tags`, статья).
- Keyboard-only навигация, `focus-visible`, контраст CTA/links/chips.
- Hover popovers внутри и вне callout.
- Desktop alignment: header / hero / footer.

### Финальный артефакт
- Короткий changelog в `docs/redesign` с перечислением изменений токенов, типографики и багфиксов + список residual risks.