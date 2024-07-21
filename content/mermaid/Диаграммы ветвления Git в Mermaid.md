---
title: Диаграммы ветвления Git в Mermaid
description: Описываем диаграммы представления графа Git в инструменте Mermaid
aliases:
  - 240430-1459
  - Mermaid Git Graph
  - Диаграммы ветвления Git в Mermaid
  - 240430-1459 Диаграммы ветвления Git в Mermaid
date: 2024-04-30
uid: 240430-1459
tags:
  - mermaid
  - git
type: permanent
---

Данный тип диаграммы позволит нам отобразить модель ветвления в виде графа Git для любого репозитория на наше усмотрение. За большей информацией ты можешь обратиться к официальной документации[^docs].

> [!example] Пример диаграммы
> В данном случае мы визуализируем модель **GitHub Flow**:
> 
> ```mermaid
> %%{init:{'theme':'neutral'}}%%
> gitGraph LR:
> commit
> branch feature/X
> commit
> commit
> checkout main
> commit
> checkout feature/X
> commit
> checkout main
> commit
> commit
> merge feature/X tag:"1.2.3"
> ```

---

- [[Mermaid|🧜🏼‍♀️ Mermaid]]

[^docs]: https://mermaid.js.org/syntax/gitgraph.html
