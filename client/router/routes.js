Router.map(function() {

  this.route('/', {
    name: 'timeline',
    // layoutTemplate: 'layout'
  });

  this.route('signOut', {
    path: '/sign-out',
    onBeforeAction: Meteor.logout
  });
});
