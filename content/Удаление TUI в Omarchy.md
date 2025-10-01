---
uid: 202509291257
date: 2025-09-29T12:57
draft: false
tags:
  - linux
  - omarchy
---

Начиная с версии `3.0.0`-`3.0.1`, в **Omarchy** сломалась возможность удалить TUI (Terminal User Interface) через стандартное меню (`Omarchy Menu` / `Remove` / `TUI`). Если нужно удалить одно такое приложение, делаем следующие шаги, пока функционал удаления не починили в production-ветке:

0. Зажимаем `Super` + `Enter` или любым другим способом запускаем настроенный в Вашей системе терминал по умолчанию (у меня **Alacritty**);
1. Поскольку все точки вхождения для меню запуска хранятся в `.desktop`-файлах, нам нужно снести его. Идём в `~/.local/share/applications`:

```bash
cd ~/.local/share/applications
```

2. Выполняем листинг директории с помощью `ls` и находим визуально предполагаемый к удалению TUI (допустим, он называется `Proxy Up`). Выполняем удаление с помощью `rm`:

```bash
cd ~/.local/share/applications

ls

rm "Proxy Up.desktop"
```

3. *(опционально)* Если во время установки TUI в систему добавлялась иконка, также рекомендуется её удалить. Располагается она по адресу `~/local/share/applications/icons` и называется так же, как и desktop-файл удалённого нами TUI. Удаление можно выполнить одной командой:

```bash
rm ~/.local/share/applications/icons/Proxy\ Up.png
```

---

- [[tags/omarchy|Omarchy]]
- [Can't remove TUI App // basecamp/omarchy Issues #1785](https://github.com/basecamp/omarchy/issues/1785)
