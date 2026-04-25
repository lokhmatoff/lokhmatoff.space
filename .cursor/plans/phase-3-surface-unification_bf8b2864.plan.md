---
name: phase-3-surface-unification
overview: Спланировать фазу 3 как унификацию поверхностей для core-компонентов с включением конфликтных secondary-стилей, сохранив границы с Phase 4 (Hero) и Phase 5 (полная a11y).
todos:
  - id: phase3-scope-lock
    content: "Зафиксировать scope: core surfaces + secondary conflict styles, без Hero и без полной a11y-валидации."
    status: completed
  - id: phase3-surface-map
    content: Собрать карту текущих surface-правил и конфликтов в core/secondary стилях.
    status: completed
  - id: phase3-core-unify
    content: Унифицировать surface-правила в core-компонентах и убрать token-конфликты.
    status: completed
  - id: phase3-secondary-align
    content: Согласовать secondary-стили (headerLinks/darkmode/contentMeta/popover) с core-правилами.
    status: completed
  - id: phase3-regression-check
    content: Провести визуальный smoke-check baseline-маршрутов и проверить search overlay.
    status: completed
  - id: phase3-validate-handoff
    content: Прогнать типизацию/сборку и подготовить phase-3 отчёт с handoff в Phase 4.
    status: completed
isProject: false
---

# План реализации Фазы 3 — Surface Unification

## Цель фазы
- Привести `Header`, `Search`, `Footer`, `PageList`, `TagList`, `RecentNotes` к единому surface-языку по форме, интерактивным состояниям и применению токенов.
- Закрыть потенциальные визуальные конфликты из secondary-слоёв (`headerLinks`, `darkmode`, `contentMeta`, `popover`), которые могут переопределять Phase 1–2.
- Сохранить границы этапов: не включать Hero/Homepage (Phase 4) и не расширять Phase 3 до полной accessibility-валидации (Phase 5).

## Scope
- **Входит:** унификация поверхностей core-компонентов + согласование secondary-стилей, которые влияют на те же визуальные состояния.
- **Не входит:** редизайн Hero/главной страницы, архитектурные изменения Quartz, полная a11y-ревизия клавиатурной навигации.

## Ключевые источники и файлы
- Требования фазы: [REDESIGN_SPEC.md](/home/lokhmatoff/Work/Personal/lokhmatoff.space/REDESIGN_SPEC.md)
- Handoff и границы предыдущего этапа: [.cursor/plans/phase-2-layout-rhythm_6d13d8ec.plan.md](/home/lokhmatoff/Work/Personal/lokhmatoff.space/.cursor/plans/phase-2-layout-rhythm_6d13d8ec.plan.md)
- Риски first-wave/secondary: [docs/redesign/phase-0-audit.md](/home/lokhmatoff/Work/Personal/lokhmatoff.space/docs/redesign/phase-0-audit.md)
- Основные стили и тема: [quartz/styles/custom.scss](/home/lokhmatoff/Work/Personal/lokhmatoff.space/quartz/styles/custom.scss), [quartz/styles/base.scss](/home/lokhmatoff/Work/Personal/lokhmatoff.space/quartz/styles/base.scss), [quartz/styles/variables.scss](/home/lokhmatoff/Work/Personal/lokhmatoff.space/quartz/styles/variables.scss), [quartz/themes/everforest.ts](/home/lokhmatoff/Work/Personal/lokhmatoff.space/quartz/themes/everforest.ts)
- Component styles (core + secondary): [quartz/components/styles](/home/lokhmatoff/Work/Personal/lokhmatoff.space/quartz/components/styles)
- Визуальная регрессия: [scripts/capture-baseline.mjs](/home/lokhmatoff/Work/Personal/lokhmatoff.space/scripts/capture-baseline.mjs), [docs/redesign/baseline/README.md](/home/lokhmatoff/Work/Personal/lokhmatoff.space/docs/redesign/baseline/README.md)

## Шаги реализации
1. Зафиксировать карту surface-правил для core-компонентов (форма, border/radius, hover/focus/active, иерархия overlay/card/flat) и выделить точки конфликта в secondary-стилях.
2. Пройтись по `quartz/components/styles/*` и убрать расхождения, где локальные правила ломают общий token-first подход из Phase 1.
3. Согласовать secondary-стили (`headerLinks`, `darkmode`, `contentMeta`, `popover`) с обновлёнными правилами surfaces, не выходя за рамки Phase 3.
4. Проверить связность Search и overlay-состояний на маршрутах baseline (`/`, статья, `/tags`, wishlist, overlay), чтобы не допустить регрессии визуальной иерархии.
5. Провести техническую валидацию (`npx tsc --noEmit`, `npm run quartz -- build`) и при необходимости обновить baseline-артефакты.
6. Зафиксировать результаты и остаточные риски в отчёте фазы 3 (`docs/redesign/phase-3-surface-unification.md`) с явным handoff в Phase 4.

## Критерии готовности (DoD)
- Core-компоненты и связанные secondary-слои визуально читаются как единая surface-система.
- Hover/focus/active унифицированы визуально и не конфликтуют между компонентами.
- Ключевые поверхности соответствуют единым токенам и не откатываются к ad-hoc локальным переопределениям.
- Сборка и типизация проходят без новых ошибок.
- Базовые baseline-сценарии не показывают регрессию по layout/surface-иерархии.

## Риски и контроль
- Риск: локальные secondary-правила повторно перетянут token-решения.
  - Контроль: отдельный проход по secondary-файлам после core-унификации и повторный визуальный smoke-check.
- Риск: смешение задач Phase 3 и Phase 4 (Hero).
  - Контроль: жёстко ограничить правки компонентами и состояниями surfaces, Hero-файлы не трогать.
- Риск: попытка закрыть полную a11y в рамках фазы 3.
  - Контроль: оставить только визуальную унификацию состояний; accessibility-аудит и keyboard-depth перенести в Phase 5.