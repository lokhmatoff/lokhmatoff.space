---
uid: 202506092016
date: 2025-06-09T20:16
tags:
  - system_design
  - php
draft: false
---

Представьте, что вам нужно применять манипуляции к изображениям в вашем приложении на [[PHP]]. Вы решаете воспользоваться пакетом [spatie/image](https://github.com/spatie/image) и не просто в стоковой форме — в качестве драйвера обработки изображений Вы выбираете `GD` (предусмотрев наличие расширения `php-gd` в среде выполнения).

Вы знаете, что пакет предоставляет 2 драйвера:

- Imagick;
- GD.

Вы никоим образом не хотите ставить расширение `imagick`, поскольку выбрали `gd`, как было описано ранее, и правильно поступите (особенно, если PHP-приложение [[tags/docker|докеризировано]]).

Однако, мы имеем следующую картину: пакет ***всегда*** инициализируется с драйвером `Imagick`, даже если в статический вызов передан драйвер `GD`. Вопрос без ответа к [Spatie](https://spatie.be) — зачем??

> [!example] Пример вызова пакета для вышеописанного кейса

```php
// Подключаем нужные классы и энамы
use Spatie\Image\Enums\ImageDriver;
use Spatie\Image\Image;

// Какой-то другой код
// ...

// Оптимизация изображения
Image::useImageDriver(ImageDriver::Gd)->load($image->getPathname())->optimize()->save();
```

Этот пример результирует в `Error` с сообщением `"Class \"Imagick\" not found"`.

> [!question] Почему так происходит?

Всё просто — при инициализации экземпляра основного фасада пакета `spatie/image` драйвер `imagick` подключается ***насильно***, а это насильное подключение связано, в первую очередь, с отсутствием перегрузок у метода `load`:

```php
// use declarations
// ...

class Image implements ImageDriver
{
    use ValidatesArguments;
    
    protected ImageDriver $imageDriver;
    
    public function __construct(?string $pathToImage = null)
    {
	    // Внимание на следующую строку!
        $this->imageDriver = new ImagickDriver;

        if ($pathToImage) {
            $this->imageDriver->loadFile($pathToImage);
        }
    }  

	// Зачем 2 разных метода? Хочется использовать один!
    public static function load(string $pathToImage): static
    {
        if (! file_exists($pathToImage)) {
            throw CouldNotLoadImage::fileDoesNotExist($pathToImage);
        }

        return new static($pathToImage);
    }

    public function loadFile(string $pathToImage): static
    {
        $this->imageDriver->loadFile($pathToImage);

        return $this;
    }

	// rest of the code...
}   
```

Это ли не пример плохого [[tags/systemdesign|System Design]]?
