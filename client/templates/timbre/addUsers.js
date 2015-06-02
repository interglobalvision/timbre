Template.addUsers.helpers({
  users: function() {
    return Meteor.users.find().fetch().map(function(it){ return it.username; });
  }
});

Template.addUsers.rendered = function() {

  this.autorun(function () {
    Meteor.subscribe("allUsernames");
  });

  Meteor.typeahead.inject();
  
};