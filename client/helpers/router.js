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
    }
  });

  this.route('settings');

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
    waitOn: function () {},
    data: function () {}
  });

  // Users

  this.route('login');

  this.route('signup');

  this.route('forgot');

});
