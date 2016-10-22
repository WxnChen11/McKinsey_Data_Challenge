
//google.maps.event.addDomListener(window, 'load', initialize);

  function initMap() {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
      center: {lat: -34.397, lng: 150.644},
      scrollwheel: true,
      zoom: 8
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