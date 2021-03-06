$(document).ready(function () {
  "use strict";

  $(".screens .owl-carousel").owlCarousel({
    autoplay: true,
    loop: true,
    margin: 20,
    responsiveClass: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: true,
        loop: false,
      },
    },
  });
});
