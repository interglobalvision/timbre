/* ---------------------------------------------------- +/
## Timbres ##
/+ ---------------------------------------------------- */

Timbres = new Meteor.Collection('timbres');

if( Meteor.isServer ) {
  // Create 2dspehere indexes
  Timbres._ensureIndex({
    location: "2dsphere",
  });
}

// Allow/Deny

Timbres.allow({
  insert: function(userId, doc){
    return can.createTimbre(userId);
  },
  update:  function(userId, doc, fieldNames, modifier){
    return can.editTimbre(userId, doc);
  },
  remove:  function(userId, doc){
    return can.removeTimbre(userId, doc);
  }
});