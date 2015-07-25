Meteor.methods({
  'postInsert': function(message, userId) {
    var user = Meteor.users.findOne(this.userId);
    var post = _.extend(message, {
      createdAt: new Date(),
      createdBy: user._id
    });
    console.log(post);

    var postId = Posts.insert(post);

    return {
      _id: postId
    };
  }
});
