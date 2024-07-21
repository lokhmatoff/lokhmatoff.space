---
title: Валидация Laravel Nova без регистрации
description: 
aliases:
  - 240524-1544 Валидация Laravel Nova без регистрации
  - 240524-1544
date: 2024-05-24
uid: 240524-1544
tags:
  - laravel
  - laravel_nova
type: permanent
---

> [!info] Информация
> Лайфхак любезно показан мне ранее моим коллегой Сашей[^src], спасибо ему за ценную информацию!

В функциональности валидации лицензии [[hubs/laravel-nova|Laravel Nova]] есть некоторая лазейка, позволяющая нам активировать продукт без наличия этой самой лицензии. Дело в записи `nova_valid_license_key`, которую *Нова* кладёт в твой кеш на *Redis* или *Memcached* (или где ты ещё реализуешь кеш на своём проекте).

При желании можно написать Artisan-команду, пример:

```php
<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Cache;

class ValidateNovaLicenseCommand extends Command
{
    protected $signature = 'app:nova:validate';
    protected $description = 'Validate Nova License online without registration';

    public function handle(): void
    {
        Cache::forget('nova_valid_license_key');
        Cache::rememberForever('nova_valid_license_key', fn () => true);
    }
}
```

---

- [[Laravel|🟥 Laravel]]

[^src]: https://t.me/itbomj
