Template.editTimbre.onRendered(function() {

  this.autorun(function () {
    if (Mapbox.loaded()) {

      $('#map').height(($(window).height()/2));

      var locationInputLat = $('#timbre-lat');
      var locationInputLong = $('#timbre-long');

      var startLocation = [locationInputLat.val(), locationInputLong.val()];

      L.mapbox.accessToken = 'pk.eyJ1IjoiaW50ZXJnbG9iYWx2aXNpb24iLCJhIjoiVWJ4c3pFayJ9.uetYP9xe-j0wqh4oUN3WxA';
      var map = L.mapbox.map('map', 'interglobalvision.lgbm61l6');
      map.setView(startLocation, 17);

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

Template.editTimbre.events = {
  'submit #form-edit-timbre': function(e) {
    e.preventDefault();
    var data = $('#form-edit-timbre').serializeArray();
    data.push(this._id);
    
    Meteor.call('editTimbre', data, function (error, result) {
      if (error) {
        console.log(error);
      } else {
        console.log('success');
        Router.go('/settings');
      }
    });
    
  }
};