Template.steps.events({
  'click .mySteps' : function () {
    var steps = Meteor.call('mySteps');
		console.log ("here are my steps: " + steps);
  },
  'click .logout' : function () {
    Meteor.logout();
  }
});


Template.activitiesStepsTable.helpers({ 
	activitiesSteps: function() {
		return ActivitiesSteps.find(); 
		} 
});

Template.steps.hasSteps = function(options) {
  return ActivitiesSteps.find().count() > 0;
};