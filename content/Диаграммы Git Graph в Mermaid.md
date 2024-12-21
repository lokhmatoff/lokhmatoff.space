---
description: Описываем диаграммы представления графа Git в инструменте Mermaid
aliases:
  - Mermaid Git Graph
date: 2024-04-30
uid: 202404301459
tags:
  - git
  - mermaidjs
---

Данный тип диаграммы позволит нам отобразить модель ветвления в виде графа Git для любого репозитория на наше усмотрение. За большей информацией ты можешь обратиться к официальной документации.

- [Документация](https://mermaid.js.org/syntax/gitgraph.html)

## Пример диаграммы

В данном случае мы визуализируем модель **GitHub Flow**.

```mermaid
gitGraph LR:
commit
branch feature/X
commit
commit
checkout main
commit
checkout feature/X
commit
checkout main
commit
commit
merge feature/X tag:"1.2.3"
```
