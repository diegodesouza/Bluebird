Template.timeline.onCreated(function() {
  // set instance to the template instance
  var instance = this;

  // add subscriptions
  instance.autorun(function() {
    instance.subscribe('posts', Router.current().params.id);
  });

  // set the cursor
  instance.message = function() {
    return Posts.find({});
  };

});

Template.timeline.helpers({
  posts: function() {
    return Template.instance().message();
  }
});
