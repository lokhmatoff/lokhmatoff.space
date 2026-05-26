---
id: "2605261550"
title: Обновление доступных зеркал pacman через reflector
aliases:
  - "2605261550"
  - Обновление доступных зеркал pacman через reflector
date: 2026-05-26
tags:
---
Для удобства доступности реестров пакетов, устанавливаемых через `pacman`, можно воспользоваться утилитой `reflector`. Также для модульности рекомендуется сохранять список зеркал в отдельный файл.

```bash
sudo reflector --latest 20 --protocol https --sort rate --save /etc/pacman.d/mirrorlist-reflector
```