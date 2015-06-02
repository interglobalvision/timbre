Template.changePassword.events = {
  'click input[type=submit]': function(event){
    event.preventDefault();

    var passwords = {
      oldPassword: $('#old-password').val(),
      newPassword: $('#new-password').val(),
      newAgain: $('#new-password-again').val()
    };

    console.log('change password click');

    var digest = Package.sha.SHA256(passwords.oldPassword);

    console.log(digest);

    Meteor.call('checkPassword', digest, function(err, result) {
      if (result) {
<<<<<<< HEAD
		    if (isValidPassword(passwords.newPassword)) {
		    	if (areSimilarPasswords(passwords.newPassword, passwords.newAgain)) {
		    		Accounts.changePassword(passwords.oldPassword, passwords.newPassword, function(error) {
			    		if (error) {
			          console.log('We are sorry but something went wrong.');
			          // flash('We are sorry but something went wrong.');
			        } else {
			          console.log('Your password has been changed.');
					    	// flash('Your passwords has been changed.');
					  		Router.go('/settings.html');
			        }
			      });
			    } else {
			    	console.log('New passwords are not the same.');
			    	// flash('New passwords are not the same.');
			    }
		    } else {
		    	console.log('Your new password should be 6 characters or longer.');
		    	// flash('Your new password should be 6 characters or longer.');
		    }
		  } else {
		  	console.log('Your old password is incorrect.');
	    	// flash('Your old password is incorrect.');
		  }
		});
=======
        console.log('password checked.');
        if (isValidPassword(passwords.newPassword)) {
          console.log('new password is valid');
          if (areSimilarPasswords(passwords.newPassword, passwords.newAgain)) {
            console.log('new passwords are similar');
            Accounts.changePassword(passwords.oldPassword, passwords.newPassword, function(error) {
              if (error) {
                console.log('We are sorry but something went wrong.');
                // flash('We are sorry but something went wrong.');
              } else {
                console.log('Your password has been changed.');
                // flash('Your passwords has been changed.');
                Router.go('/settings.html');
              }
            });
          } else {
            console.log('New passwords are not the same.');
            // flash('New passwords are not the same.');
          }
        } else {
          console.log('Your new password should be 6 characters or longer.');
          // flash('Your new password should be 6 characters or longer.');
        }
      } else {
        console.log('Your old password is incorrect.');
        // flash('Your old password is incorrect.');
      }
    });
>>>>>>> 702163dbc1a83c775d898988f66cf6dbbe9685eb

  }
};
