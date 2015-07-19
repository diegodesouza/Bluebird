Meteor.methods({
  'postInsert': function(message) {
    // var user = Meteor.user();
    var post = _.extend(message, {
      createdAt: new Date()
      // userId: user._id
    });

    var postId = Posts.insert(post);

    return {
      _id: postId
    };
  }
});
