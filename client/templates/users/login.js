Template.login.events = {
  'click input[type=submit]': function(event){
    event.preventDefault();
    var username = $('#username').val();
    var password = $('#password').val();

    console.log('login click')

    Meteor.loginWithPassword(username, password, function(error){
      if (error){
        console.log(error.reason);
      } else{
        Router.go('/');
      }
    });
  }
};