Template.settings.events = {
  'submit #form-user-settings': function(e) {
    e.preventDefault();
    var data = $('#form-user-settings').serializeArray();
    
    Meteor.call('editUser', data, function (error, result) {
      if (error) {
        console.log(error);
      } else {
        console.log('success');
        Router.go('/settings');
      }
    });
    
  }
};