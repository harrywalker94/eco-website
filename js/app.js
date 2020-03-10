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
  $(".nav-link, .email, #topBtn").click(function (link) {
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

  /* Owl Carousel */
  $('.owl-carousel').owlCarousel({
    loop: true,
    smartSpeed: 2000,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })
  $(".owl-prev").html('<div data-aos="fade-in"><i class="fa fa-chevron-left"></i></div>');
  $(".owl-next").html('<div data-aos="fade-in"><i class="fa fa-chevron-right"></i></div>');

  /* Magnific Image gallery */
  // Solar PV
  $('#open-popup1').magnificPopup({
    items: [
      {
        src: '../assets/images/solar-pv/solarpv-diagram.png',
        title: 'Solar PV'
      },
      {
        src: '../assets/images/solar-pv/solar6.jpg',
        title: 'Solar PV'
      },
      {
        src: '../assets/images/solar-pv/solar1.jpg',
        title: 'Solar PV'
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
  });
  // Air-Source Heat Pump
  $('#open-popup2').magnificPopup({
    items: [
      {
        src: '../assets/images/air-source/air-source-diagram3.jpg',
        title: 'Air Source Heat Pump'
      },
      {
        src: '../assets/images/air-source/air-source5.jpg',
        title: 'Air Source Heat Pump'
      },
      {
        src: '../assets/images/air-source/air-source6.jpg',
        title: 'Air Source Heat Pump'
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
  });

  $('#open-popup3').magnificPopup({
    items: [
      {
        src: '../assets/images/solar-pv/solarpv-diagram.png',
        title: 'Solar PV'
      },
      {
        src: '../assets/images/solar-pv/solar6.jpg',
        title: 'Solar PV'
      },
      {
        src: '../assets/images/solar-pv/solar1.jpg',
        title: 'Solar PV'
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
  });

  $('#open-popup4').magnificPopup({
    items: [
      {
        src: '../assets/images/solar-pv/solarpv-diagram.png',
        title: 'Solar PV'
      },
      {
        src: '../assets/images/solar-pv/solar6.jpg',
        title: 'Solar PV'
      },
      {
        src: '../assets/images/solar-pv/solar1.jpg',
        title: 'Solar PV'
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
  });

  $('#open-popup5').magnificPopup({
    items: [
      {
        src: '../assets/images/solar-pv/solarpv-diagram.png',
        title: 'Solar PV'
      },
      {
        src: '../assets/images/solar-pv/solar6.jpg',
        title: 'Solar PV'
      },
      {
        src: '../assets/images/solar-pv/solar1.jpg',
        title: 'Solar PV'
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
  });

  $('#open-popup6').magnificPopup({
    items: [
      {
        src: '../assets/images/solar-pv/solarpv-diagram.png',
        title: 'Solar PV'
      },
      {
        src: '../assets/images/solar-pv/solar6.jpg',
        title: 'Solar PV'
      },
      {
        src: '../assets/images/solar-pv/solar1.jpg',
        title: 'Solar PV'
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
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
    content: '<img class="map" src="assets/images/newlogo3.png" style="height:4rem"/>'
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




