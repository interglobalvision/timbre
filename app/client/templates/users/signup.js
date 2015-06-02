Template.signup.events = {
  'click input[type=submit]': function(event){
    event.preventDefault();

    var user = {
      username: $('#username').val(),
      email: $('#email').val(),
      password: $('#password').val(),
      repeatPassword: $('#repeat-password').val()
    };

    var usernameLength = user.username.length,
      usernameLimit = nameLimit();

    var usernameExists = Meteor.users.findOne({username: user.username});


    if (isNotEmpty(user.username) && isNotEmpty(user.email) && isNotEmpty(user.password)) {

      if (usernameLength <= usernameLimit) {

        if (!usernameExists) {

          if (isEmail(user.email)) {

            if (isValidPassword(user.password)) {

              if (areSimilarPasswords(user.password, user.repeatPassword)) {
                
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
                console.log('Oh those passwords dont match.');
                // flash('Oh those passwords dont match.');
              }

            } else {
              console.log('Your password should be 6 characters or longer.');
              // flash('Your password should be 6 characters or longer.')
            }

          } else {
            console.log('Please enter a valid email.');
            // flash('Please enter a valid email.');
          }

        } else {
          console.log('Ufff that username is taken ~ Try something better.');
          // flash('Ufff that username is taken ~ Try something better.');
        }

      } else {
        console.log('Your username is over 20 characters. Try something shorter.');
        // flash('Your username is over 20 characters. Try something shorter.');
      }

    } else { 
      console.log('Please fill in all fields.');
      // flash('Please fill in all fields.');
    }

  },
};
