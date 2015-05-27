// Set interval to check and update location every 8 seconds
// >>> this should not be here. probably in main.js
Meteor.setInterval(function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    Session.set('lat', position.coords.latitude);
    Session.set('lon', position.coords.longitude);
  });
}, 8000);

Template.homepage.events = {
	'click .timbre': function(event){
    event.preventDefault();

    Meteor.call('ringTimbre', this._id, function(error, result) {
      if (error) {
        console.log(error);
      } else {
        alert('You rung the bell');
      }
    });

  }
};
