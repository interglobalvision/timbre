/* ---------------------------------------------------- +/

## Permissions ##

Permission checks

Usage:

if (can.editItem(Meteor.user(), myItem)){
  // do something  
}

/+ ---------------------------------------------------- */

can = {
  createItem: function (userId) {
    return true;
  },
  editItem: function (userId, item) {
    return userId === item.userId;
  },
  removeItem: function (userId, item) {
    return userId === item.userId;
  }
}

can = {
  createTimbre: function (userId) {
    return true;
  },
  editTimbre: function (userId, item) {
    return userId === item.userId;
  },
  removeTimbre: function (userId, item) {
    return userId === item.userId;
  }
}
