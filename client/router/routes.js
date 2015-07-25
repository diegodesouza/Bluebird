Router.map(function() {

  this.route('/', {
    name: 'timeline',
    waitOn: function() {
      return Meteor.subscribe('posts');
    }
  });

  this.route('signOut', {
    path: '/sign-out',
    onBeforeAction: Meteor.logout
  });
});
