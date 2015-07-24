Meteor.publish('posts', function(userId) {
  return Posts.find({userId: userId});
});
