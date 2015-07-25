Meteor.publish('posts', function(userId) {
  var currentUserId = this.userId;
  return Posts.find({createdBy: currentUserId});
});
