		// Модуль Google Map
var map = document.querySelector(".contacts__map");
var initMap = function() {
    var uluru = {lat: 55.829948, lng: 49.069755};
    var mapGoogle = new google.maps.Map(map, {
      zoom: 17,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: mapGoogle,
      icon: {
        url: "img/map-marker_icon.png",
        scaledSize: new google.maps.Size(55, 80)
      }
    });
}