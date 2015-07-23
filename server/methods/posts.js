Meteor.methods({
  'postInsert': function(message) {
    var user = Meteor.userId();
    var post = _.extend(message, {
      createdAt: new Date(),
      userId: user._id
    });

    var postId = Posts.insert(post);
    // this would prevent the page from reloading
    // return false
    return {
      _id: postId
    };
  }
});
