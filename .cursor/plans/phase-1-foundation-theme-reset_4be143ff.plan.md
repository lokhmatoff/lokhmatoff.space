---
name: phase-1-foundation-theme-reset
overview: "Спланировать следующую незавершённую фазу редизайна после завершённой Фазы 0: Фаза 1 (Foundation — Tokens + Theme reset), чтобы нейтрализовать Everforest-визуал и заложить token-first основу для следующих фаз."
todos:
  - id: map-semantic-tokens
    content: Сопоставить токены из спецификации с текущими Quartz-переменными и определить финальный semantic-layer для Фазы 1
    status: completed
  - id: reset-theme-palette
    content: Обновить палитру в quartz/themes/everforest.ts до нейтрального document-first стиля без выраженных green/orange акцентов
    status: completed
  - id: implement-foundation-layer
    content: Внедрить foundation-токены и базовые глобальные правила в quartz/styles/custom.scss и при необходимости скорректировать base.scss/variables.scss
    status: completed
  - id: validate-light-dark
    content: Проверить визуальную читаемость и консистентность light/dark на ключевых baseline-страницах
    status: completed
  - id: document-phase1-outcome
    content: Зафиксировать результат и остаточные риски Фазы 1 в docs/redesign для передачи в Фазу 2
    status: completed
isProject: false
---

# План реализации Фазы 1 — Foundation (Tokens + Theme reset)

## Цель
- Нивелировать визуальную идентичность Everforest в основных поверхностях.
- Ввести семантические токены light/dark как единый источник правды для будущей унификации поверхностей.
- Подготовить стабильную token-first базу в глобальных стилях без лоскутных локальных правок.

## Scope файлов
- [REDESIGN_SPEC.md](/home/lokhmatoff/Work/Personal/lokhmatoff.space/REDESIGN_SPEC.md)
- [quartz.config.ts](/home/lokhmatoff/Work/Personal/lokhmatoff.space/quartz.config.ts)
- [quartz/themes/everforest.ts](/home/lokhmatoff/Work/Personal/lokhmatoff.space/quartz/themes/everforest.ts)
- [quartz/styles/custom.scss](/home/lokhmatoff/Work/Personal/lokhmatoff.space/quartz/styles/custom.scss)
- [quartz/styles/base.scss](/home/lokhmatoff/Work/Personal/lokhmatoff.space/quartz/styles/base.scss)
- [quartz/styles/variables.scss](/home/lokhmatoff/Work/Personal/lokhmatoff.space/quartz/styles/variables.scss)
- [docs/redesign/phase-0-audit.md](/home/lokhmatoff/Work/Personal/lokhmatoff.space/docs/redesign/phase-0-audit.md)

## Шаги реализации
1. Зафиксировать целевую карту токенов из спецификации (`--bg`, `--bg-elevated`, `--text`, `--text-muted`, `--border`, `--border-strong`, `--accent`, `--accent-contrast`, `--ring`, `--shadow-sm/md`, `--radius-*`, `--space-*`) и сопоставить её с текущими Quartz-переменными, чтобы избежать дублирования.
2. Обновить палитру темы в [quartz/themes/everforest.ts](/home/lokhmatoff/Work/Personal/lokhmatoff.space/quartz/themes/everforest.ts): убрать выраженные green/orange акценты, привести light/dark к нейтральному документному контрасту.
3. В [quartz/styles/custom.scss](/home/lokhmatoff/Work/Personal/lokhmatoff.space/quartz/styles/custom.scss) ввести семантический слой токенов и базовые правила foundation (цвета поверхностей, нейтральные границы, базовые радиусы/тени, стандартный focus ring).
4. В [quartz/styles/base.scss](/home/lokhmatoff/Work/Personal/lokhmatoff.space/quartz/styles/base.scss) минимально скорректировать глобальные стили, чтобы они потребляли новые семантические токены и не тянули старые Everforest-акценты.
5. Проверить [quartz.config.ts](/home/lokhmatoff/Work/Personal/lokhmatoff.space/quartz.config.ts) на конфликты темы/типографики/подсветки и оставить только изменения, необходимые для визуального reset.
6. Прогнать локальную проверку (сборка/типизация) и вручную сверить ключевые страницы из baseline (`/`, `/tags`, `/wishlist`, типовая статья) в light/dark.
7. Задокументировать итог Фазы 1 в `docs/redesign/` (кратко: какие токены введены, что сброшено относительно Everforest, какие зоны остаются на Фазу 2).

## Критерии готовности (DoD)
- В основных поверхностях больше нет «кислотных» Everforest-акцентов.
- Семантические токены работают в обеих темах и используются глобальными стилями.
- Контраст текста/ссылок остаётся читаемым в light и dark.
- Изменения не ломают текущий рендер markdown и существующую структуру layout.
- Есть краткий отчёт по рискам для перехода к Фазе 2 (Layout & Rhythm).

## Риски и контроль
- Риск: локальные компонентные стили перебьют foundation-токены.
  - Контроль: ограничить Фазу 1 глобальным слоем и фиксировать случаи конфликтов как входящие задачи Фазы 2/3.
- Риск: избыточные правки в component-level стилях увеличат объём фазы.
  - Контроль: не делать surface-unification в этой фазе, только foundation-reset.
- Риск: несогласованность light/dark после смены палитры.
  - Контроль: обязательная визуальная проверка baseline-маршрутов в обеих темах.