Meteor.methods({
  // Timbre methods
  createTimbre: function (data) {

    var name = data[0].value,
      address = data[1].value,
      lat = data[2].value,
      lng = data[3].value,
      username = Meteor.user().username;

    // Check argument types
    check(name, String);
    check(address, String);

    lat = parseFloat(lat);
    lng = parseFloat(lng);

    return Timbres.insert({
      name: name,
      address: address,
      location: {
        type: "Point",
        coordinates: [lng, lat]
      },
      users: [ Meteor.userId() ]
    });
  },

  editTimbre: function (data) {

    var name = data[0].value,
      address = data[1].value,
      lat = data[2].value,
      lng = data[3].value,
      id = data[4];

    // Check argument types
    check(name, String);
    check(address, String);

    lat = parseFloat(lat);
    lng = parseFloat(lng);

    return Timbres.update(id, {
      $set: {
        name: name,
        address: address,
        location: {
          type: "Point",
          coordinates: [lng, lat]
        }
      }
    });
  },

  addUser: function (data) {
    var username = data[0].value,
      userId = data[1],
      timbreId = data[2];

    // Check argument types
    check(userId, String);
    check(timbreId, String);

    return Timbres.update(timbreId, {
        $addToSet: {
          users: userId
        }
      }
    );
  },

  leaveTimbre: function (data) {
    var timbreId = data[0],
      userId = data[1];

    // Check argument types
    check(userId, String);
    check(timbreId, String);

    return Timbres.update(timbreId, {
        $pull: {
          users: userId
        }
      }
    );
  },

  removeTimbre: function(timbreId){
    check(timbreId, String);

    return Timbres.remove(timbreId);
  },

  editUser: function (data) {
    var username = data[0].value,
      email = data[1].value;

    // Check argument types
    check(username, String);
    check(email, String);

    return Meteor.users.update( 
      { _id: Meteor.userId() }, 
      { 
        $set: { 
          'username': username,
          'emails.0.address': email 
        }
      } 
    );
  },

  checkPassword: function(digest) {

    if (this.userId) {
      var user = Meteor.user();
      var password = {digest: digest, algorithm: 'sha-256'};
      var result = Accounts._checkPassword(user, password);
      return result.error == null;
    } else {
      return false;
    }
  },

  ringTimbre: function(timbreId) {
    var timbre = Timbres.findOne({_id: timbreId});

    for (var i = 0; i < timbre.users.length; i++) {
      console.log(timbre.users[i]);

      Notifications.insert({
        timbreName: timbre.name,
        userId: timbre.users[i],
        read: false
      });

    }

    return;
  },

  // Notifications methods
  createNotification: function(data) {
    return;
  },

});
