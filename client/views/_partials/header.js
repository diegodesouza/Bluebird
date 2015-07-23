Template.header.helpers({

});

Template.header.onRendered(function(){
  this.$(".button-collapse").sideNav({
    menuWidth: 300,
    edge: 'right'
  });
});
