/* ---------------------------------------------------- +/

## Publications ##

All publications-related code.

/+ ---------------------------------------------------- */

Meteor.publish('timbres', function(args){
  if( args.coords[0] !== null ) {
//     console.log(args.coords);
    return Timbres.find({
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: args.coords
          },
          $maxDistance: 40,
        },
      }
    }, {
      limit: 5
    });
  }
 else {
    return Timbres.find({}, { limit: 1 });
  }
});

Meteor.publish('singleTimbre', function(id) {
  return Timbres.find(id);
});

Meteor.publish('userTimbres', function(userId){
  return Timbres.find({users: userId});
});

Meteor.publish('notifications', function(userId){
  return Notifications.find({userId: userId});
});