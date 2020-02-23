$(document).ready(function () {
  /* Burger icon to 'x' */
  $(".navbar").click(function () {
    $(".navbar-toggler").toggleClass("change");
  });

  /*Prevent burger icon changing when nav-link is clicked*/
  $(".nav-link").click(function () {
    $(".navbar-toggler").toggleClass("change");
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

  $(window).scroll(function () {
    if ($(this).scrollTop() > 60) {
      $('#topBtn').fadeIn();
    } else {
      $('#topBtn').fadeOut();
    }
  });

  /* Smooth Scroll */
  $(".nav-item a, .top-icons a, #topBtn").click(function (link) {
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

/* GoogleMaps API */
function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    /* Map Options */
    zoom: 13,
    center: {
      lat: 51.739300,
      lng: 0.048120
    }
  });

  var marker = new google.maps.Marker({
    position: { lat: 51.739300, lng: 0.048120 },
    map: map,
    icon: 'http://maps.google.com/mapfiles/kml/paddle/grn-blank.png',
    draggable: true,
    animation: google.maps.Animation.DROP,
  });

  marker.addListener('click', toggleBounce);

  var infoWindow = new google.maps.InfoWindow({
    content: '<img src="assets/images/newlogo3.png"/> '
  });

  marker.addListener('click', function () {
    infoWindow.open(map, marker);
  });

  var circle = new google.maps.Circle({
    map: map,
    center: {
      lat: 51.727798,
      lng: 0.020863
    },
    radius: 100000

  });

  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

}










/* EmailJS
window.onload = function () {
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    // generate the contact number value
    this.contact_number.value = Math.random() * 100000 | 0;
    emailjs.sendForm('contact_service', 'contact_template', this);
  });
}
*/




