---
title: Получение всех индексов таблицы БД с помощью Laravel Tinker
description: Пользуемся глубинными инструментами фреймворка, когда недоступна команда db:table
date: 2024-05-27
uid: 2405271508
tags:
  - laravel
  - laravel-tinker
---

Заходим в **Tinker** и построчно выполняем инструкции. С помощью первой получим экземпляр низкоуровневого драйвера подключения к базе данных:

```php
$sm = Schema::getConnection()->getDoctrineSchemaManager();
```

Далее для необходимой нам таблицы (пускай она будет называться `users`) вызываем у менеджера схемы метод листинга индексов:

```php
$indexesFound = $sm->listTableIndexes('{insert_your_table_name}');
```

---

- [[laravel/index|🟥 Laravel]]
