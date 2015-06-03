/* ---------------------------------------------------- +/

## Client Router ##

Client-side Router.

/+ ---------------------------------------------------- */

// Config

Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
});

// Filters

var filters = {

  isLoggedIn: function() {
    if (!(Meteor.loggingIn() || Meteor.user())) {
      this.stop();
      this.redirect('/login');
    } else {
      this.next();
    }
  }

}

Router.onBeforeAction(filters.isLoggedIn, {except: ['about', 'login', 'signup']});

// Routes

Router.map(function() {

  // Items

  this.route('items', {
    waitOn: function () {
      return Meteor.subscribe('allItems');
    },
    data: function () {
      return {
        items: Items.find()
      }
    }
  });

  this.route('item', {
    path: '/items/:_id',
    waitOn: function () {
      return Meteor.subscribe('singleItem', this.params._id);
    },
    data: function () {
      return {
        item: Items.findOne(this.params._id)
      }
    }
  });

  // Pages

  this.route('homepage', {
    path: '/',
    onBeforeAction: function () {
      if (!(Meteor.loggingIn() || Meteor.user())) {
        this.stop();
        this.redirect('/about');
      } else {
        this.next();
      }
    },
    waitOn: function() {
      return Meteor.subscribe('timbres', {coords: [ Session.get('lng'), Session.get('lat')]});
    },
    data: {
      timbres: function(){
        navigator.geolocation.getCurrentPosition( function(position) {
          Session.set('lng', position.coords.longitude);
          Session.set('lat', position.coords.latitude);
/*
          console.log('long', Session.get('lng') );
          console.log('lat', Session.get('lat') );
*/
        });
        var coords = [ Session.get('lng'), Session.get('lat')];
//         console.log(coords);
        return Timbres.find({
          location: {
            $near: {
              $geometry: {
                type: 'Point',
                coordinates: coords
              },
              $maxDistance: 25,
            },
          }
        });
      }
    }
  });

  this.route('settings', {
    path: '/settings',
    waitOn: function() {
      return Meteor.subscribe('userTimbres', Meteor.userId() );
    },
    data: {
      userTimbres: function(){ return Timbres.find({ users: Meteor.userId() }) },
    }
  });

  this.route('changePassword', {
    path: '/change-password',
  });

  this.route('about');

  // TIMBRES

  this.route('createTimbre', {
    path: '/timbre/create'
  });

  this.route('editTimbre', {
    path: '/timbre/edit/:_id',
    waitOn: function () {
      return [
        Meteor.subscribe('singleTimbre', this.params._id),
        Meteor.subscribe('timbreUsers', this.params._id)
      ];
    },
    data: {
      timbre: function(){ 
        return Timbres.findOne() 
      },
      users: function() {
        return Meteor.users.find( { _id: { $in: Timbres.findOne().users } } );
      }
    }
  });

  this.route('leaveTimbre', {
    path: '/timbre/leave/:_id',
    waitOn: function () {
      return [
        Meteor.subscribe('singleTimbre', this.params._id),
      ];
    },
    data: {
      timbre: function(){ 
        return Timbres.findOne() 
      }
    }
  });

  // Users

  this.route('login');

  this.route('signup');

  this.route('forgot');

});
