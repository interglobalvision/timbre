Meteor.methods({
  // Timbre methods
  createTimbre: function (data) {

    var name = data[0].value,
      address = data[1].value,
      lat = data[2].value,
      lng = data[3].value;

    // Check argument types
    check(name, String);
    check(address, String);

    lat = parseFloat(lat);
    lng = parseFloat(lng);

/*
    console.log(name);
    console.log(address);
    console.log(lat);
    console.log(lng);
    console.log(Meteor.user()._id);
*/

    return Timbres.insert({
      name: name,
      address: address,
      location: {
        type: "Point",
        coordinates: [lng, lat]
      },
      users: [Meteor.user()._id]
    });
  },
  ringTimbre: function(timbreId) {
    var timbre = Timbres.findOne({_id: timbreId});

    for (var i = 0; i < timbre.users.length; i++) {
//       console.log(timbre.users[i]);

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
  }
});