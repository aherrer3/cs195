
      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBD_Mw7DdobPhDZC00Cw76MaL83QJF-QBs&callback=initMap"
    async defer></script>