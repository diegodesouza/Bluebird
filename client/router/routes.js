Router.map(function() {

  this.route('/', {
    name: 'timeline',
  });

  this.route('signOut', {
    path: '/sign-out',
    onBeforeAction: Meteor.logout
  });
});
