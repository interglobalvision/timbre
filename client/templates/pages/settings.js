Template.settings.events = {
  'submit #form-user-settings': function(e) {
    e.preventDefault();
    var data = $('#form-user-settings').serializeArray();

    if (isNotEmpty(data[0]) && isNotEmpty(data[1])) {
      if (isEmail(data[1])) {
    
        Meteor.call('editUser', data, function (error, result) {
          if (error) {
            console.log(error);
          } else {
            console.log('success');
            Router.go('/settings');
          }
        });

      } else {
        console.log('Please enter a valid email.');
        // flash('Please enter a valid email.');
      }
    } else {
      console.log('Please fill in all fields.');
      // flash('Please fill in all fields.');
    }
    
  }
};