Template.createTimbre.onRendered(function() {

  this.autorun(function () {
    if (Mapbox.loaded()) {

      var startLocation = [19.435156, -99.140907];

      var locationInput = $('#timbre-location');

      L.mapbox.accessToken = 'pk.eyJ1IjoiaW50ZXJnbG9iYWx2aXNpb24iLCJhIjoiVWJ4c3pFayJ9.uetYP9xe-j0wqh4oUN3WxA';
      var map = L.mapbox.map('map', 'interglobalvision.lgbm61l6');
      map.setView(startLocation, 17);
      map.locate();

      var marker = L.marker(startLocation);
      marker.addTo(map);

      map.on({
        'movestart': function() {

        },
        'moveend': function() {
          var newCenter = map.getCenter();
          marker.setLatLng(newCenter).update();
          locationInput.val(newCenter);
        }
      });
    }
  });

});

Template.createTimbre.events = {
  'click input[type=submit]': function(e) {
    e.preventDefault();
  }
};