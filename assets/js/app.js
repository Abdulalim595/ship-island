$(document).ready(function () {
  $(".header__bar , .offcanvas-overlay").click(function () {
    $(".offcanvas-area , .offcanvas-overlay").addClass("active");
  });
  $(".menu-close , .offcanvas-overlay").click(function () {
    $(".offcanvas-area , .offcanvas-overlay").removeClass("active");
  });

$('.testimonial__card').owlCarousel({
  items: 1,
  slidesToShow: 1,
  loop: true,
  margin: 30,
  nav: false,
  dot: true,
  responsive: {
    400: {
        items: 1
    },
    500: {
        items: 1
    },
    600: {
        items: 1
    },
    1000: {
        items: 1
    },
    
    1200: {
        items: 2
    }
}
});

$("#youtube").magnificPopup({
  type: "iframe",
});

$("#youtube1").magnificPopup({
  type: "iframe",
});

$(".counter").counterUp({
  delay: 10,
  time: 1000,
});

});
