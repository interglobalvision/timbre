/* ---------------------------------------------------- +/

## Fixtures ##

Fill in the app with dummy data if database is empty.

/+ ---------------------------------------------------- */

/* Dummy user */
if( Meteor.users.findOne({ 'emails.address': 'globie@interglobal.vision' }) == undefined ) {
  Accounts.createUser({
    username: 'globie',
    email: 'globie@interglobal.vision',
    password: 'globie'
  });

  Accounts.createUser({
    username: 'hugo',
    email: 'hugo@interglobal.vision',
    password: 'hugo'
  });

  Accounts.createUser({
    username: 'paco',
    email: 'paco@interglobal.vision',
    password: 'paco'
  });

  Accounts.createUser({
    username: 'luis',
    email: 'luis@interglobal.vision',
    password: 'luis'
  });
}

/* Timbres dataa */
if (Timbres.find().count() === 0) {
  var globie = Meteor.users.findOne({ 'emails.address': 'globie@interglobal.vision' }),
    hugo = Meteor.users.findOne({ 'emails.address': 'hugo@interglobal.vision' }),
    paco = Meteor.users.findOne({ 'emails.address': 'paco@interglobal.vision' }),
    luis = Meteor.users.findOne({ 'emails.address': 'luis@interglobal.vision' });

  Timbres.insert({
    name: "Mansioncita",
    location: {
      type: "Point",
      coordinates: [ -99.162956, 19.409738 ]
    },
    address: "Nayarit 45, Col. Roma",
    users: [ globie._id ]
  });

  Timbres.insert({
    name: "Vecino de Mansioncita",
    location: {
      type: "Point",
      coordinates: [ -99.162956, 19.409738 ]
    },
    address: "Nayarit 43, Col. Roma",
    users: [ globie._id, hugo._id ]
  });

  Timbres.insert({
    name: "DOGO",
    location: {
      type: "Point",
      coordinates: [ -99.162248, 19.409865 ]
    },
    address: "Monterrey 259, Col. Roma",
    users: [ globie._id, paco._id ]
  });

  Timbres.insert({
    name: "CHAVVOS420",
    location: {
      type: "Point",
      coordinates: [ -99.1490657, 19.4313399 ]
    },
    address: "Ayuntamiento 132 - 15, Col. Centro, Cuauhtémoc, DF",
    users: [ globie._id, luis._id ]
  });
}
