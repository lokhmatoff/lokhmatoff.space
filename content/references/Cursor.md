---
id: "2412221215"
title: Cursor
aliases:
  - "2412221215"
  - Cursor IDE
  - Cursor CLI
date: 2024-12-22
categories:
  - "[[Приложения]]"
private: false
---
Редактор кода на базе **VS Code** с встроенным **ИИ-агентом**: десктопное приложение (**Cursor IDE**), терминальный **Cursor CLI**, веб и мобильные клиенты. Разработчик — [Anysphere](https://anysphere.inc/).

## Зачем мне

Основная **агентированная среда** для разработки, настройки волта (rules, skills, agents) и планируемой домашней автоматизации ([[2608011244 Плюсы и минусы ИИ-автоматизации в домашней лаборатории|homelab + n8n]]). CLI — для agentic loop'ов и скриптов; IDE — для интерактивной работы.

## Что внутри (август 2026)

- **Agent** — правки файлов, терминал, LSP, веб, MCP; режимы Plan, Ask, Agent (см. [документацию](https://cursor.com/docs/agent/overview)).
- **Plan Mode** — планирование без правок; **Build** — исполнение плана. Для простых задач «промпт → код» Agent Mode часто избыточен.
- **Rules и skills** — `.cursor/rules/`, `.cursor/skills/`, subagents; в CLI те же правила, что в IDE ([using CLI](https://cursor.com/docs/cli/using)).
- **MCP** — `mcp.json` / marketplace; интеграции в IDE и CLI.
- **Composer 2.5** — собственная модель Cursor для агентной разработки; вариант Fast по умолчанию ([Composer](https://cursor.com/composer), [blog](https://cursor.com/blog/composer-2-5)).
- **Cursor CLI** — headless (`-p`), GitHub Actions, worktrees; корень workspace определяется через git (см. [[Cursor CLI завязывается на корень git-репозитория в монорепе]]).

Модели сторонних провайдеров (Claude, GPT, Gemini и др.) и **Auto**-routing доступны в picker; конкретные лимиты тарифов **не фиксирую здесь** — они меняются быстро.

## Ссылки

- Сайт: https://cursor.com
- Документация: https://cursor.com/docs
- CLI: https://cursor.com/cli
- Changelog CLI: https://cursor.com/docs/cli/changelog
- Форум: https://forum.cursor.com
- [Lee Robinson](https://leerob.com/) — контент и практики (сотрудник Cursor)

## Связанные заметки

- [[Об этом хранилище]] — rules/skills в этом волте
- [[Cursor CLI завязывается на корень git-репозитория в монорепе]]
- [[О нежелательности коммитов с планами разработки Cursor]]
- [[План - Реализация для простых задач в Cursor]]
- [[Модели Cursor по этапам работы]]
- [[О скорости устаревания прикладных знаний об ИИ]]
- Legacy (on-demand): `_DEFINITELY_LEGACY/zettels/2604280302 MOC ИИ-агенты` — поднятые заметки удалены из legacy

## Заметки

_Место для опыта взаимодействия; evergreen — после эволюции из legacy._
