---
title: Rust
description: Заметки, посты и очерки о языке програмиирования Rust
uid: 202501091739
date: 2025-01-09T17:39
---

Высокоуровневый язык программирования для создания программ различного профиля:

- сервисы для командной строки (CLI);
- веб-приложения через [[WebAssembly]];
- сетевые сервисы с предсказуемой высокой производительностью и поразительной отказоустойчивостью;
- драйверы и ПО для встраиваемых устройств и базовых компьютерных железяк.

> [!info] Заметки об этом языке — результат моего следования [[Learning in Public|концепции «Learning in Public»]]

Также оставляю свой прогресс по *роадмапу*:

[![roadmap.sh](https://roadmap.sh/card/wide/6498b505d99c9d673195abca?variant=dark&roadmaps=rust)](https://roadmap.sh)
## Установка

На [[WSL]] или [tags/linux|Linux] или **macOS**:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

## REPL (игровая площадка)

Есть online-песочница — [play.rust-lang.org](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024).

Для оффлайн-изысканий предлагается поставить *crate*:

```bash
cargo install evcxr_repl
```

В терминале будет доступна команда `evcxr`:

```bash
evcxr
```
