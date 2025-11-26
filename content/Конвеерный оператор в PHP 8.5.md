---
uid: 202508081502
date: 2025-08-08T15:02
draft: false
tags:
  - php
---

> [!hint] 2025-11-23T15:17 — [[PHP]] 8.5 уже 3 дня как вышел!
> Помимо конвеерного оператора стоит попробовать и оценить другие нововведения этой версии языка...

В версии языка [[tags/php|PHP]] 8.5, планируемой к релизу 20 ноября 2025 года, добавляется конвеерный оператор (pipe operator) для упрощения прогона значений в программах через цепочки вызовов.

Синтаксис (на примере обработки строки):

```php
$input = ' Some kind of string ';

$output = $input
	|> trim(...)
	|> fn (string $value) => str_replace(' ', '-', $value)
	|> fn (string $value) => str_replace(['.', '/', '...'], '', $value)
	|> strtolower(...);
```

Круто, не так ли? Слоник становится чуть ближе к функциональной парадигме!

Поскольку версия ещё не вышла, нет возможности проверить и утверждать, что это будет 100% актуально, но всё же — кажется, что мы сможем создавать красивые декларативные композиции по обработке значений в наших проектах. Представьте пример выше: видно, что всю операцию можно назвать превращением в слаг (символьный код). Тогда мы можем иметь следующий код:

```php
// Somewhere in code
$addDashes = fn (string $value) => str_replace([' ', '_'], '-', $value);
$removeSpecialChars = fn (string $value) => str_replace(['.', '/', '...'], '', $value);

// Putting it together
$sluggify = fn (string $input) => $input
	|> trim(...)
	|> $addDashes(...)
	|> $removeSpecialChars(...)
	|> strtolower(...);

// In client code
$title = ' Some article title  ';

$slug = $sluggify($title);
```

Выглядит очень атомарно и декларативно, как по мне 🔥

---

- [[Чего не хватает в PHP]]
- [The pipe operator in PHP 8.5](https://stitcher.io/blog/pipe-operator-in-php-85?ref=dailydev)
