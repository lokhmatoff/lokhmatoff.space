---
name: phase-0-baseline-audit
overview: "Спланировать реализацию первой незавершенной фазы редизайна: Фаза 0 (Baseline & Audit). Результат фазы — зафиксированный scope, baseline-скриншоты (desktop+mobile) и согласованный список компонентов первой волны."
todos:
  - id: audit-entrypoints
    content: Провести аудит текущих theme/style entry points и зафиксировать их в документе
    status: completed
  - id: define-first-wave
    content: Согласовать список компонентов первой волны для редизайна
    status: completed
  - id: capture-baseline
    content: Сделать baseline-скриншоты ключевых страниц в desktop/mobile и light/dark
    status: completed
  - id: write-phase0-artifacts
    content: Сформировать docs/redesign/phase-0-audit.md и структуру baseline-артефактов
    status: completed
  - id: phase0-readiness-check
    content: Проверить критерии приемки Фазы 0 перед стартом Фазы 1
    status: completed
isProject: false
---

# План реализации Фазы 0 — Baseline & Audit

Первая незавершенная фаза по вашему статусу: **Фаза 0**.

## Цель фазы

- Зафиксировать текущее визуальное состояние до изменений.
- Определить точный scope файлов и компонентов для последующих фаз.
- Подготовить артефакт, на который можно опираться при ревью Phase 1+.

## Что именно делаем

- Провести аудит точек, где сейчас формируется визуальный стиль и тема:
  - [quartz.config.ts](quartz.config.ts)
  - [quartz/themes/everforest.ts](quartz/themes/everforest.ts)
  - [quartz/styles/custom.scss](quartz/styles/custom.scss)
  - [quartz/styles/base.scss](quartz/styles/base.scss)
  - [quartz/styles/variables.scss](quartz/styles/variables.scss)
- Зафиксировать первую волну UI-поверхностей для редизайна из спецификации и текущих компонентов:
  - [quartz/components/Header.tsx](quartz/components/Header.tsx)
  - [quartz/components/Search.tsx](quartz/components/Search.tsx)
  - [quartz/components/PageList.tsx](quartz/components/PageList.tsx)
  - [quartz/components/TagList.tsx](quartz/components/TagList.tsx)
  - [quartz/components/RecentNotes.tsx](quartz/components/RecentNotes.tsx)
  - [quartz/components/Footer.tsx](quartz/components/Footer.tsx)
  - связанные стили в [quartz/components/styles](quartz/components/styles)
- Подготовить baseline-скриншоты (до редизайна) по фиксированной матрице:
  - Страницы: главная (`/`), лист заметок/индекс, страница тега, типичная статья.
  - Viewports: desktop (например 1440x900), mobile (например 390x844).
  - Режимы: light + dark.
- Сохранить результаты аудита и baseline в единый артефакт фазы (документ + папка скриншотов), чтобы следующие фазы проверялись относительно него.

## Предлагаемые артефакты фазы

- Новый документ аудита: [docs/redesign/phase-0-audit.md](docs/redesign/phase-0-audit.md)
- Папка baseline-скриншотов: [docs/redesign/baseline](docs/redesign/baseline)

## Содержимое `phase-0-audit.md`

- Текущий theme-source (что реально подключено сейчас).
- Таблица scope: файл -> роль в визуальной системе -> приоритет (high/medium/low).
- Список "первая волна компонентов" (с обоснованием).
- Чеклист baseline capture (какие страницы/режимы/viewports сняты).
- Риски на входе в Фазу 1 (например, локальные component-scope  
d стили, которые могут перебивать токены).

## Критерии готовности Фазы 0

- Зафиксирован и проверяем список затрагиваемых файлов.
- Есть baseline-скриншоты desktop + mobile минимум для ключевых маршрутов.
- Есть согласованный список компонентов первой волны.
- Подготовлен артефакт, который можно использовать как baseline в PR следующих фаз.

## Проверка перед переходом к Фазе 1

- Убедиться, что baseline охватывает все поверхности из раздела Surface System в спецификации.
- Подтвердить, что в audit явно отражено текущее использование Everforest как отправной точки для theme reset.

