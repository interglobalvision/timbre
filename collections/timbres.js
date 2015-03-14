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

// Methods

Meteor.methods({
  createTimbre: function(timbre){
    if(can.createTimbre(Meteor.user())) {

      // Check for valid name
      if( !timbre.name )
        throw new Meteor.Error("empty-name", "Timbre should have a name");
      Timbres.insert(timbre);
    }
  },
  removeTimbre: function(timbre){
    if(can.removeTimbre(Meteor.user(), timbre)){
      Timbres.remove(timbre._id);
    }else{
      if( Meteor.isClient )
        new Meteor.Error(403, 'You do not have the rights to delete this timbre.')
      throw new Meteor.Error(403, 'You do not have the rights to delete this timbre.')
    }
  }
});
