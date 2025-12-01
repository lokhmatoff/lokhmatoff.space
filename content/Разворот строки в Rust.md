---
uid: 202510192155
date: 2025-10-19T21:55
draft: false
---

Достаточно простая задачка как для уже опытного в [[Rust]] программиста, так и для новичка, только щупающего язык. Имеет несколько вариантов решений, здесь напишу то, до чего додумался.

> [!tldr] Как решил задачку
> 1. Взял строку и вызвал метод `chars`, преобразовав строку в итератор символов;
> 2. С помощью метода `rev` изменил порядок итератора;
> 3. Собрал итератор в коллекцию с помощью метода `collect`, дженериком преобразовал в строку (не стековый тип `&str`, а `String`).

> [!warning]- О сложных символах Юникода (графемах)
> По умолчанию [[Rust]] при таком решении сконвертирует графемы в их юникодовое представление (например `\u1234`). Эту проблему решил с помощью [[Крейты в Rust|крейта]] `unicode-segmentation`. Установил:
> 
> ```bash
> cargo add unicode-segmentation
> ```
> 
> Затем импортировал [[Трейты в Rust|трейт]]:
> 
> ```rust
> use unicode_segmentation::UnicodeSegmentation;
> ```
> 
> И заменил вызов `chars` на `graphemes(true)` (преобразование строки в итератор кластеров графем с опцией расширенных кластеров).

Конечный код:

```rust
// reverse-string/lib.rs
use unicode_segmentation::UnicodeSegmentation;

pub fn reverse(input: &str) -> String {
    // Return iterator of chars, reverse iterator, turn it into collection and join in String type
    // input.chars().rev().collect::<String>()
    input.graphemes(true).rev().collect::<String>()
}
```
