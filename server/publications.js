/* ---------------------------------------------------- +/

## Publications ##

All publications-related code. 

/+ ---------------------------------------------------- */

// Publish all items

Meteor.publish('allItems', function() {
  return Items.find();
});

// Publish a single item

Meteor.publish('singleItem', function(id) {
  return Items.find(id);
});

Meteor.publish('timbres', function(args){
  if( args.coords[0] !== null ) {
    console.log(args.coords);
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
  } else {
    return Timbres.find({}, { limit: 0 });
  }
});
