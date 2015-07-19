var Schemas = {};

Posts = new Mongo.Collection('posts');
Posts.attachSchema(new SimpleSchema({
  message: {
    type: String,
    label: "Enter your Message",
    max: 300
  },
  createdAt: {
    type: String,
    optional: true
  }
}));

Posts.attachSchema(Schemas.Posts);

Posts.allow({
 insert: function() {
   return true;
 }
});
