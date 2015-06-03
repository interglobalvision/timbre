Template.leaveTimbre.events = {
  'submit #form-leave-timbre': function(e) {
    e.preventDefault();
    var userId = Meteor.user()._id,
      timbreId = Timbres.findOne()._id,
      data = [
        timbreId,
        userId
      ], 
      isMember = Timbres.findOne({users: { "$in" : [ userId ] } }),
      memberCount = Timbres.findOne().users.length;

    if (isMember) {
      if (memberCount > 1) {
        Meteor.call('leaveTimbre', data, function (error, result) {
          if (error) {
            console.log(error);
          } else {
            console.log('success');
            Router.go('/settings');
          }
        });
      } else {
        Meteor.call('removeTimbre', timbreId, function (error, result) {
          if (error) {
            console.log(error);
          } else {
            console.log('success');
            Router.go('/settings');
          }
        });
      }
    } else {
      console.log('Hey! Youre not a member of this Timbre!');
      // flash('Hey! Youre not a member of this Timbre!');
      Router.go('/settings');
    }

  }
};
