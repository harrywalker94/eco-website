$(document).ready(function () {
  /* Burger icon to 'x' */
  $(".navbar").click(function () {
    $(".navbar-toggler").toggleClass("change");
  });

  /* Icon hover color change */
  $(".icon-top a:nth-child(4)").hover(function () {
    $(".icon-hover").css("color", "#f1fffa");
    $(".contact-us1").css("color", "#214c32");
  }, function () {
    $(".icon-hover").css("color", "#214c32");
    $(".contact-us1").css("color", "#f1fffa");
  });

  $(".icon-top a:nth-child(5)").hover(function () {
    $(".icon-hover2").css("color", "#f1fffa");
    $(".contact-us2").css("color", "#214c32");
  }, function () {
    $(".icon-hover2").css("color", "#214c32");
    $(".contact-us2").css("color", "#f1fffa");

  });



  $(".icon-top a:nth-child(4)").hover(function () {
    $(".icon-hover").css("color", "#f1fffa");
  }, function () {
    $(".icon-hover").css("color", "#214c32");
  });

  $(".icon-top a:nth-child(5)").hover(function () {
    $(".icon-hover2").css("color", "#f1fffa");
  }, function () {
    $(".icon-hover2").css("color", "#214c32");
  });






  /* Navbar Fade In */
  // Hide Navbar initially
  $(function () {
    $(window).scroll(function () {
      // Set distance user needs to scroll before fadeIn
      if ($(this).scrollTop() >= 149) {
        $(".navbar").addClass("navbar-background");
        $(".navbar").addClass("fixed-top");
      } else {
        $(".navbar").removeClass("navbar-background");
        $(".navbar").removeClass("fixed-top");
      }
    });
  });

  /* Smooth Scroll */
  $(".nav-item a").click(function (link) {
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



});




function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: {
      lat: 46.619261,
      lng: -33.134766
    }
  });

  var labels = ["ECO", "ECO", "ECO", "ECO"];

  var locations = [
    { lat: 51.727798, lng: 0.020863 },
    { lat: 51.761559, lng: 0.004545 },
    { lat: 51.800944, lng: 0.146734 },
    { lat: 51.766047, lng: 0.105656 }
  ];

  var markers = locations.map(function (location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length]
    });
  });
  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
  });
}

