Template.login.events = {
	'click input[type=submit]': function(event){
    event.preventDefault();

    var passwords = {
      oldPassword: $('#old-password').val(),
      newPassword: $('#new-password').val(),
      newAgain: $('#new-password-again').val()
    };

    console.log('change password click');

    if (isValidPassword(passwords.newPassword)) {
    	if (areSimilarPasswords(passwords.newPassword, passwords.newAgain)) {
	    	console.log('Your password has been changed.');
	    	// flash('Your passwords has been changed.');
	    } else {
	    	console.log('New passwords are not the same.');
	    	// flash('New passwords are not the same.');
	    }
    } else {
    	console.log('Your new password should be 6 characters or longer.');
    	// flash('Your new password should be 6 characters or longer.');
    }
    

  }
};