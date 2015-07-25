Meteor.publish('posts', function(userId) {
  return Posts.find({_id: this.userId});
});
