Template.settings.events = {
  'submit #form-user-settings': function(e) {
    e.preventDefault();
    var data = $('#form-user-settings').serializeArray(),
    username = data[0].value,
    email = data[1].value,
    length = username.length,
    limit = nameLimit();

    console.log(email);

    if (isNotEmpty(username) && isNotEmpty(email)) {

      if (length <= limit) {

        if (isEmail(email)) {
      
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
        console.log('Your username is over 20 characters. Try something shorter.');
        // flash('Your username is over 20 characters. Try something shorter.');
      }

    } else {
      console.log('Please fill in all fields.');
      // flash('Please fill in all fields.');
    }
    
  }
};