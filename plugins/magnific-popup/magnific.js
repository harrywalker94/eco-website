$(document).ready(function () {
  /* Magnific Image gallery */
  // Solar PV
  $('#open-popup1').magnificPopup({
    items: [
      {
        src: '../assets/images/solar-pv/solarpv-diagram.png',
        title: 'Solar PV Diagram'
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
        src: '../assets/images/air-source/air-source-diagram.jpg',
        title: 'Air Source Heat Pump Diagram'
      },
      {
        src: '../assets/images/air-source/air-source4.jpg',
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
        src: '../assets/images/battery-storage/battery-storage-diagram.png',
        title: 'Battery Storage System Diagram'
      },
      {
        src: '../assets/images/battery-storage/battery-storage1.jpg',
        title: 'Battery Storage System'
      },
      {
        src: '../assets/images/battery-storage/battery-storage3.png',
        title: 'Battery Storage System'
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
        src: '../assets/images/inverter-systems/inverter-diagram.png',
        title: 'Inverter System Diagram'
      },
      {
        src: '../assets/images/inverter-systems/solaredge2.jpg',
        title: 'Inverter System'
      },
      {
        src: '../assets/images/inverter-systems/solaredge4.jpg',
        title: 'Inverter System'
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
        src: '../assets/images/air-to-air/air-conditioner1.jpg',
        title: 'Air to Air Unit'
      },
      {
        src: '../assets/images/air-to-air/air-conditioner2.jpg',
        title: 'Air to Air Unit'
      },
      {
        src: '../assets/images/air-to-air/air-conditioner3.jpg',
        title: 'Air to Air Unit'
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
        src: '../assets/images/gas-boilers/boiler1.jpg',
        title: 'Gas Boiler Diagram'
      },
      {
        src: '../assets/images/gas-boilers/boiler4.jpg',
        title: 'Gas Boiler'
      },
      {
        src: '../assets/images/gas-boilers/boiler3.jpg',
        title: 'Gas Boiler'
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
  });
});
