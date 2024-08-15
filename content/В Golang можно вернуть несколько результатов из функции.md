---
title: В Golang можно вернуть несколько результатов из функции
uid: 2408141720
date: 2024-08-14
tags:
  - golang
aliases:
  - 2408141720 В Golang можно вернуть несколько результатов из функции
draft: true
type: permanent
---

Давай реализуем функцию `swap`, которая меняет местами 2 строковых значения. Выглядеть это будет так:

```go
func swap(first, second string) (string, string) {
    return second, first
}

// В месте использования
func main() {
    hello, world := swap("world", "hello")
    // ...
}
```

Возвраты оформляются через запятую и имеют типизацию `(TYPE, TYPE)`.

> [!tip] Нотация `(TYPE, TYPE)` лично мне напоминает [[Кортеж]].
