/* ---------------------------------------------------- +/

## Notifications ##

All code related to the Notifications collection goes here.

/+ ---------------------------------------------------- */

Notifications = new Meteor.Collection('notifications');

// Allow/Deny

Notifications.allow({
  insert: function(userId, doc){
    return can.createItem(userId);
  },
  update:  function(userId, doc, fieldNames, modifier){
    return can.editItem(userId, doc);
  },
  remove:  function(userId, doc){
    return can.removeItem(userId, doc);
  }
});