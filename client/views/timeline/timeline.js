Template.timeline.onCreated(function() {
  // set instance to the template instance
  var instance = this;

  // add subscriptions
  instance.autorun(function() {
    instance.subscribe('posts', Router.current().params.id);
  });

  // set the cursor
  instance.posts= function() {
    // sort by created last
    return Posts.find({}, {sort: {createdAt: -1}});
  };
});

Template.timeline.helpers({
  posts: function() {
    return Template.instance().posts();
  }
});
