/* ---------------------------------------------------- +/

## Fixtures ##

Fill in the app with dummy data if database is empty.

/+ ---------------------------------------------------- */

// Fixture data 
if (Items.find().count() === 0) {
 
  Items.insert({
    title: "Eridanus",
    body: "Eridanus is a constellation. It is represented as a river; its name is the Ancient Greek name for the Po River."
  });

  Items.insert({
    title: "Cassiopeia",
    body: "Cassiopeia is a constellation in the northern sky, named after the vain queen Cassiopeia in Greek mythology, who boasted about her unrivalled beauty."
  });

  Items.insert({
    title: "Scorpius",
    body: "Scorpius, sometimes known as Scorpio, is one of the constellations of the zodiac."
  });

}

/* Dummy user */
if( Meteor.users.findOne({ 'emails.address': 'globie@interglobal.vision' }) == undefined ) {
  Accounts.createUser({
    email: 'globie@interglobal.vision',
    password: 'globie'
  });

  Accounts.createUser({
    email: 'hugo@interglobal.vision',
    password: 'hugo'
  });

  Accounts.createUser({
    email: 'paco@interglobal.vision',
    password: 'paco'
  });

  Accounts.createUser({
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
    name: "CHAVVOS420",
    location: {
      type: "Point",
      coordinates: [ -99.1490657, 19.4313399 ]
    },
    address: "Ayuntamiento 132 - 15, Col. Centro, Cuauhtémoc, DF",
    users: [ globie._id ]
  });

  Timbres.insert({
    name: "Casaa de Hugo",
    location: {
      type: "Point",
      coordinates: [ -99.152845, 19.427591 ]
    },
    address: "Ayuntamiento 132 - 15, Col. Centro, Cuauhtémoc, DF",
    users: [ globie._id ]
  });
}
