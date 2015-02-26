Template.homepage.helpers({
  notLoggedIn: function () {
    return !Meteor.user();
  }
})