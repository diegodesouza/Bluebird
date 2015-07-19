Meteor.startup(function() {
  if(Posts.find({}).count() === 0) {
    var posts = [
      {
        message: "this is my cool message",
        createdAt: new Date()
      },
      {
        message: "this is my message",
        createdAt: new Date()
      },
      {
        message: "this is my cool post",
        createdAt: new Date()
      }
    ];
    posts.forEach(function(p) {
      Posts.insert(p);
    });
  }
});
