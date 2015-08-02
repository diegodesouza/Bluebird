Template.profileForm.events({
  "submit form": function(e, t) {
    e.preventDefault();

    var inputs = t.findAll("input");

    Meteor.users.update(
      { _id: this.userId },
      { $set: { "profile.name": inputs[0].value,
                "profile.about": inputs[1].value }
      }
    );
    Session.set("editProfile", false);
  }
});
