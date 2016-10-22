
//google.maps.event.addDomListener(window, 'load', initialize);

  function initMap() {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
      center: {lat: 52.35, lng: -1.17},
      scrollwheel: true,
      zoom: 8
    });

    var markers = [];
    markers[0] = new google.maps.Marker({
      position: {lat: 52.35, lng: -1.17},
      map: map,
      title: 'first marker'
    });

    var contentString = 'hello world';
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    })

    marker.addListener('click', function() {
      infowindow.open(map, marker)
    });
  }


/*function initialize() {


  var latlng = new google.maps.LatLng(52.3731, 4.8922);

  var mapOptions = {
    center: latlng,
    scrollWheel: false,
    zoom: 13
  };

  var marker = new google.maps.Marker({
    position: latlng,
    url: '/',
    animation: google.maps.Animation.DROP
  });

  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  marker.setMap(map);

};*/
/* end google maps -----------------------------------------------------*/
