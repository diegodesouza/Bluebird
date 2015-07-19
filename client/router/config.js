Router.configure({
  layoutTemplate: 'mainLayout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

// Global Actions
Router.onBeforeAction(function() {
  if (Meteor.isClient) {
    $(window).scrollTop(0);
  }
  this.next();
});
