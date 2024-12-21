---
title: Валидация Laravel Nova без регистрации
description: Избавляемся от неприятной плашки в панели
date: 2024-05-24
uid: 202405241544
tags:
  - laravel
  - lifehacks
---

Лайфхак любезно показан мне ранее моим коллегой Сашей, спасибо ему за ценную информацию! К слову, у него есть свой [канал в Telegram'е](https://t.me/itbomj) 💡

В функциональности валидации лицензии **Laravel Nova** есть некоторая лазейка, позволяющая нам активировать продукт без наличия этой самой лицензии. Дело в записи `nova_valid_license_key`, которую *Нова* кладёт в твой кеш на **Redis** или **memcached** (или где ты ещё реализуешь кеш на своём проекте).

При желании можно написать Artisan-команду, пример:

```php
<?php

declare(strict_types=1);

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
