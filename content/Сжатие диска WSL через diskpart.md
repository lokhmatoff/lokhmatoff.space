---
uid: 202506062018
date: 2025-06-06T20:18
tags:
  - wsl
draft: false
---

Для **Windows 10** и **WSL 2** это позволяет сэкономить монструозный объём жёсткого диска или SSD.

> [!tip] Примечание
> Описанный конкретно здесь способ является альтернативой или заменой методу через утилиту `optimize-vhd`, а также для тех, у кого отключена экспериментальная фича WSL — `sparseVhd`.
> 
> За способ спасибо гуру из *Superuser*![^thread]

#### Как быть?

0. Открываем командную строку [[Windows]] от имени администратора;
1. Завершаем работу [[WSL]]:

```batch
wsl --shutdown
```

2. Запускаем утилиту `diskpart`:

```batch
diskpart
```

3. Загружаем виртуальный диск с твоим дистрибутивом [[tags/linux|Linux]]:

```batch
select vdisk file="<vhdx_file_path>"
```

> [!example]- На примере с Ubuntu...
> Рекомендуемый мелкомягкими дистрибутив для [[WSL]] — [[Ubuntu]], обычно находится по пути `C:\Users\{some_user}\AppData\Local\Packages\CanonicalGroupLimited.Ubuntu_79rhkp1fndgsc\LocalState\ext4.vhdx`. Для правильного пути советую открыть проводник и глянуть самостоятельно 😎

4. Подвязываем диск в режиме чтения:

```batch
attach vdisk readonly
```

5. Запускаем операцию сжатия:

```batch
compact vdisk
```

6. Отвязываем виртуальный диск и выходим из утилиты:

```batch
detach vdisk
```

```batch
exit
```

[^thread]: https://superuser.com/a/1734392