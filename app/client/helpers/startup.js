Meteor.startup(function(){
  Mapbox.load();

  Meteor.subscribe('notifications', Meteor.userId());
});