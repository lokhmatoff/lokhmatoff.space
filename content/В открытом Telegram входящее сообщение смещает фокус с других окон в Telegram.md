---
uid: 202511101750
date: 2025-11-10T17:50
draft: false
tags:
  - omarchy
---

В приложениях, которые могут присылать уведомления, перехватываемые [[Hyprland|Hyprland'ом]], может сработать автофокус на рабочее пространство и/или окно с этим приложением при появлении подобного уведомления. Это особенность конфигурации [[Hyprland]] в [[Omarchy|Omarchy]]: в файле `looknfeel.conf` содержится автоматическое выставление настройки `misc.focus_on_activate`.

**Как решить эту проблему**

Распишу, как это делается в [[Omarchy|Omarchy]]. Мы просто берём и переписываем это правило. Открываем с помощью [[tags/neovim|NeoVim]] доступный для безопасного редактирования файл `looknfeel.conf`:

```bash
nvim ~/.config/hypr/looknfeel.conf
```

Добавляем секцию **misc** с отключаемой нами опцией:

```properties
# Change the default Omarchy look'n'feel

# ... (other settings)

# ADD THIS SECTION AND SETTING BELOW
# https://wiki.hyprland.org/Configuring/Variables/#misc
misc {
    focus_on_activate = false
}
```

Сохраняем и закрываем `nvim` (такой режим важен для горячего обновления **Hyprland** в [[Omarchy|Omarchy]]):

```
:wq
```
