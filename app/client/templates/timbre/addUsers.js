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

Template.addUsers.events = {
  'submit #form-add-user': function(e) {
    e.preventDefault();
    var data = $('#form-add-user').serializeArray(),
    username = data[0].value,
    userExists = Meteor.users.findOne({username: username});

    if (userExists) {
      var isMember = Timbres.findOne({users: { "$in" : [ userExists._id ] } });
      if (!isMember) {
      	data.push(Meteor.users.findOne({username: username})._id);
      	data.push(Timbres.findOne()._id);
        
  			Meteor.call('addUser', data, function (error, result) {
  			  if (error) {
  			    console.log(error);
  			  } else {
  			    console.log('success');
  			    Router.go('/settings');
  			  }
  			});

      } else {
        console.log('That user is already a member of this Timbre.');
      // flash('That user is already a member of this Timbre.');
      }
		} else {
		console.log('That username is invalid.');
		// flash('That username is invalid.');
		}
	}
};