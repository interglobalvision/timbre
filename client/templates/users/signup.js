Template.signup.events = {
  'click input[type=submit]': function(event){
    event.preventDefault();

    var user = {
      username: $('#username').val(),
      email: $('#email').val(),
      password: $('#password').val()
    };

    if (isNotEmpty(user.username) && isNotEmpty(user.email) && isNotEmpty(user.password)) {
      if (isEmail(user.email)) {
        if (isValidPassword(user.password)) {
          Accounts.createUser(user, function(error){
            if (error) {
              console.log(error.reason);
              // flash(error.reason, 'error');
            } else {
              Router.go('/');
              console.log('Thanks for signing up!');
              // flash('Thanks for signing up!');
            }
          });
        } else {
          console.log('Your password should be 6 characters or longer.');
          // flash('Your password should be 6 characters or longer.')
        }
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