---
title: Получение всех индексов таблицы БД через REPL от Laravel
description: 
aliases:
  - 240527-1508 Получение всех индексов таблицы БД через REPL от Laravel
  - 240527-1508
date: 2024-05-27
uid: 240527-1508
tags:
  - laravel
  - laravel_tinker
  - php
type: permanent
---

> [!tip] Примечание
> Предполагается, что у разработчика есть доступ к [[hubs/laravel-tinker|Laravel Tinker]]

Заходим в **Tinker** и построчно выполняем инструкции. С помощью первой получим экземпляр низкоуровневого драйвера подключения к базе данных (в нашем случае [[hubs/postgresql|PostgreSQL]]):

```php
$sm = Schema::getConnection()->getDoctrineSchemaManager();
```

Далее для необходимой нам таблицы (пускай она будет называться `users`) вызываем у менеджера схемы метод листинга индексов:

```php
$indexesFound = $sm->listTableIndexes('{insert_your_table_name}');
```

---

- [[hubs/laravel-tinker|Laravel Tinker]]
