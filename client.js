$(document).ready(function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        showMap(position.coords.latitude, position.coords.longitude);
    });
  }
});

function showMap(lat, lon) {
    var point = new google.maps.LatLng(lat, lon);
    var opts = {
        center : point, 
        zoom : 15,
        mapTypeId : google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map_canvas"), opts);
    var mark = new google.maps.Marker({position : point, map : map, title : "BAM"});
}
