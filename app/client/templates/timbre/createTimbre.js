Template.createTimbre.onRendered(function() {

  this.autorun(function () {
    if (Mapbox.loaded()) {

      $('#map').height(($(window).height()/2));

      var startLocation = [19.435156, -99.140907];

      var locationInputLat = $('#timbre-lat');
      var locationInputLong = $('#timbre-long');

      L.mapbox.accessToken = 'pk.eyJ1IjoiaW50ZXJnbG9iYWx2aXNpb24iLCJhIjoiVWJ4c3pFayJ9.uetYP9xe-j0wqh4oUN3WxA';
      var map = L.mapbox.map('map', 'interglobalvision.lgbm61l6');
      map.setView(startLocation, 17);

      if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position) {
//           console.log(position);
          map.setView([position.coords.latitude, position.coords.longitude], 17);
        }, function(error) {
          console.log(error);
        }, {
          enableHighAccuracy: true,
          maximumAge : 30000,
          timeout : 27000
        });
      }

      var marker = L.marker(startLocation);
      marker.addTo(map);

      map.on({
        'movestart': function() {

        },
        'moveend': function() {
          var newCenter = map.getCenter();
          marker.setLatLng(newCenter).update();
          locationInputLat.val(newCenter.lat);
          locationInputLong.val(newCenter.lng);
        }
      });
    }
  });

});

Template.createTimbre.events = {
  'submit #form-create-timbre': function(e) {
    e.preventDefault();
    var data = $('#form-create-timbre').serializeArray(),
      address = data[1].value,
      length = address.length,
      limit = addressLimit();

    if (length <= limit) {

      Meteor.call('createTimbre', data, function (error, result) {
        if (error) {
          console.log(error);
        } else {
          Router.go('/');
        }
      });

    } else {
      console.log('Your address is longer than 50 characters. Try and shorten it a bit.');
      // flash('Your address is longer than 50 characters. Try and shorten it a bit.');
    }
  }
};