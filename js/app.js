$(document).ready(function () {
  /* Burger icon to 'x' */
  $(".navbar").click(function () {
    $(".navbar-toggler").toggleClass("change");
  });

  /*Prevent burger icon changing when nav-link is clicked*/
  $(".nav-link").click(function () {
    $(".navbar-toggler").toggleClass("change");
  });

  $(".dropdown-item").click(function () {
    $(".navbar-toggler").toggleClass("change");
  });

  /* Navbar Fade In */
  // Hide Navbar initially
  $(function () {
    $(window).scroll(function () {
      // Set distance user needs to scroll before fadeIn
      if ($(this).scrollTop() >= 149) {
        $(".navbar").addClass("navbar-sticky");
        $(".navbar").addClass("fixed-top");
        $('.product-header').css({
          'display': 'none'
        })
      } else {
        $(".navbar").removeClass("navbar-sticky");
        $(".navbar").removeClass("fixed-top");
        $('.product-header').css({
          'display': 'initial'
        })
      }
    });
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 60) {
      $('#topBtn').fadeIn();
    } else {
      $('#topBtn').fadeOut();
    }
  });

  /* Smooth Scroll */
  $(".nav-link, .email, #topBtn, .contact-two li a").click(function (link) {
    link.preventDefault(); // preventDefault method stops the default action of an element happening

    let target = $(this).attr("href"); // Find the attribute of the href of the anchor link
    $("html, body")
      .stop() // To stop the animate when another anchor linked is clicked
      .animate(
        {
          scrollTop: $(target).offset().top - 90// scrollTop property gets or sets the number of pixels that an element's content is scrolled vertically.
        }, // The .offset().top  method allows us to retrieve the current position of the target element
        2000
      );
  });

  const $dropdown = $(".dropdown");
  const $dropdownToggle = $(".dropdown-toggle");
  const $dropdownMenu = $(".dropdown-menu");
  const showClass = "show";

  $(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 768px)").matches) {
      $dropdown.hover(
        function () {
          const $this = $(this);
          $this.addClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "true");
          $this.find($dropdownMenu).addClass(showClass);
        },
        function () {
          const $this = $(this);
          $this.removeClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "false");
          $this.find($dropdownMenu).removeClass(showClass);
        }
      );
    } else {
      $dropdown.off("mouseenter mouseleave");
    }
  });
});

/* GoogleMaps API */

/* Map Options */
var options = {
  zoom: 9,
  center: {
    lat: 51.739300,
    lng: 0.048120
  }
}

function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), options);

  var marker = new google.maps.Marker({
    position: { lat: 51.739300, lng: 0.048120 },
    map: map,
    icon: 'http://maps.google.com/mapfiles/kml/paddle/grn-blank.png',
    draggable: true,
    animation: google.maps.Animation.DROP,
  });

  marker.addListener('click', toggleBounce);

  var infoWindow = new google.maps.InfoWindow({
    content: '<img class="map" src="assets/images/logos/newlogo3.png" style="height:4rem"/>'
  });

  marker.addListener('click', function () {
    infoWindow.open(map, marker);
  });

  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }


}














