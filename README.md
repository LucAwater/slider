# Slider by [Luc Awater](https://github.com/LucAwater)

Simple but powerful slider element. It includes a lightbox function, clickable bullets, swipe and more.

## Get started

### Build
```
<div class="slider">

  <!-- Lightbox controls -->
  <div class="lightbox-controls">
    <a class="lightbox-open"><img src="lightbox-open.svg"></a>
    <a class="lightbox-close"><img src="lightbox-close"></a>
  </div>

  <!-- The images -->
  <ul class="slider-images">
    <li><img src="image1.jpg"></li>
    <li><img src="image2.jpg"></li>
    <li><img src="image3.jpg"></li>
  </ul>

  <!-- The captions -->
  <ul class="slider-captions">
    <li><div>contains whatever</div></li>
    <li><div>contains whatever</div></li>
    <li><div>contains whatever</div></li>
  </ul>

  <!-- The bullets -->
  <ul class="slider-bullets">
    <li><i></i></li>
    <li><i></i></li>
    <li><i></i></li>
  </ul>

  <!-- Arrow controls -->
  <div class="slider-controls">
    <a class="slider-prev"><img src="arrow.svg"></a>
    <a class="slider-next"><img src="arrow.svg"></a>
  </div>

</div>
```

### Initialize
```
$( "div" ).slider({
  click: true,
  buttons: true,
  keys: true,
  swipe: true,
  bullets: true,
  lightbox: true
});
```

* Click: enable click on image to proceed to the next
* Buttons: enable arrow controls for next and previous
* Keys: enable arrow keyboard control
* Swipe: enable swipe on touch devices
* Bullets: enable clickable bullets
* Lightbox: enable lightbox functionality
