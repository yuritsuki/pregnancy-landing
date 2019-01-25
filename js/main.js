// OwlCarousel
$(document).ready(function(){
  $(".card-container").owlCarousel({
      stagePadding: 50,
      margin: 15,
      dots: false,
      responsive:{
        0:{
            items:1
        },
        993:{
            items:3
        }
    }
  });
  $(".persons-mobile").owlCarousel({
      items: 1,
      center:true,
      stagePadding: 50,
      margin: 15,
      dots: true
  });
  $(".block-about-reasons").owlCarousel({
        items: 1,
        center:true,
        stagePadding: 50,
        margin: 15,
      dots:true
  })

});

//smooth scrolling
$('a[href*="#"]')
.not('[href="#"]')
.not('[href="#0"]')
      .click(function(event) {
            if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
      ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                  event.preventDefault();
                  $('html, body').animate({
                        scrollTop: target.offset().top
                  }, 1000, function() {
                        var $target = $(target);
                        $target.focus();
                        if($target.is(":focus")) {
                              return false;
                        } else {
                              $target.attr('tabindex', '-1');
                              $target.focus();
                        };
                  });
            }
      }
      });