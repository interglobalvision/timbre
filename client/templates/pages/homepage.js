// Set interval to check and update location every 8 seconds
Meteor.setInterval(function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    Session.set('lat', position.coords.latitude);
    Session.set('lon', position.coords.longitude);
  });
}, 8000);
