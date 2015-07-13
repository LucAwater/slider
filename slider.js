(function ( $ ) {

    $.fn.slider = function( options ) {

      return this.each(function() {

        // Default options
        var settings = $.extend({
          click: true,
          buttons: true,
          keys: true,
          swipe: true,
          bullets: true,
          lightbox: true
        }, options );

        $this = $(this);

        // Variables
        var images = $this.find('.slider-images')
        var image = $this.find('.slider-images li')

        var captions = $this.find('.slider-captions')
        var caption = $this.find('.slider-captions li')

        var bullets = $this.find('.slider-bullets')
        var bullet = $this.find('.slider-bullets li')

        var controls = $this.find('.slider-controls')
        var next = $this.find('.slider-next')
        var prev = $this.find('.slider-prev')

        // First image, bullet and caption get first & active classes
        image.first().addClass("first-image first is-active")
        caption.first().addClass("first-caption first is-active")
        bullet.first().addClass("first-bullet first is-active")

        // Last image, bullet and caption get last class
        image.last().addClass("last-image last")
        caption.last().addClass("last-caption last")
        bullet.last().addClass("last-bullet last")

        // Next image if clicked on image
        if( settings.click === true ) {
          image.click(function() {
            var parent = $(this).closest('.slider')
            var current = parent.find('.is-active');

            if (current.hasClass("last")) {
              var target = parent.find('.first');
            } else {
              var target = current.next();
            }

            current.removeClass("is-active");
            target.addClass("is-active");
          });
        }

        // Next and previous arrow buttons
        if( settings.buttons === true ) {
          next.click(function() {
            var parent = $(this).closest('.slider')
            var current = parent.find('.is-active');

            if (current.hasClass("last")) {
              var target = parent.find('.first');
            } else {
              var target = current.next();
            }

            current.removeClass("is-active");
            target.addClass("is-active");
          });

          prev.click(function() {
            var parent = $(this).closest('.slider')
            var current = parent.find('.is-active');

            if (current.hasClass("first")) {
              var target = parent.find('.last');
            } else {
              var target = current.prev();
            }

            current.removeClass("is-active");
            target.addClass("is-active");
          });
        } else {
          controls.remove();
        }

        // Next and previous with keyboard
        if( settings.keys === true ) {
          $(window).keydown(function(e) {
            if (e.which === 39) {
              var current = $('.is-active');

              if (current.hasClass("last")) {
                var target = $('.first');
              } else {
                var target = current.next();
              }

              current.removeClass("is-active");
              target.addClass("is-active");
            }

            if (e.which === 37) {
              var current = $('.is-active');

              if (current.hasClass("first")) {
                var target = $('.last');
              } else {
                var target = current.prev();
              }

              current.removeClass("is-active");
              target.addClass("is-active");
            }
          });
        }

        // Next and previous with swipe
        if( settings.swipe === true ) {
          image.on("swipeleft", function() {
            var parent = $(this).closest('.slider')
            var current = parent.find('.is-active');

            if (current.hasClass("last")) {
              var target = parent.find('.first');
            } else {
              var target = current.next();
            }

            current.removeClass("is-active");
            target.addClass("is-active");
          });

          image.on("swiperight", function() {
            var parent = $(this).closest('.slider')
            var current = parent.find('.is-active');

            if (current.hasClass("first")) {
              var target = parent.find('.last');
            } else {
              var target = current.prev();
            }

            current.removeClass("is-active");
            target.addClass("is-active");
          });
        }

        // Bullet click functionality
        if( settings.bullets === true ) {
          bullet.click(function() {
            var count = $(this).index() + 1;
            var parent = $(this).closest('slider');

            var current = parent.find('.is-active');
            var target = parent.find('.slider-images li:nth-child(' + count + ')');
            var target_bullet = parent.find('.slider-bullets li:nth-child(' + count + ')');

            current.removeClass("is-active");
            target.addClass("is-active");
            target_bullet.addClass("is-active");
          });

          // Hide bullets and controls if there's only 1 image
          if (image.length < 2) {
            bullets.remove();
            controls.remove();
          } else {
            // Do nothing
          }
        } else {
          bullets.remove();
        }

        // Lightbox functionality
        if( settings.lightbox === true ) {
          var slider = $(this);
          var parent = $(this).closest('.slider')

          var open = parent.find('.lightbox-open');
          var close = parent.find('.lightbox-close');

          open.click(function() {
            slider.addClass("is-zoomed");

            close.click(function() {
              slider.removeClass("is-zoomed");

              var slider_width = slider.width();

              slider.css("height", slider_width * 0.75);
            });
          });
        }

      });

    };

}( jQuery ));
