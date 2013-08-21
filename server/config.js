var fitbit = new Fitbit();

Meteor.startup(function () {

	Accounts.loginServiceConfiguration.remove({
	    service : 'fitbit'
	});

	Accounts.loginServiceConfiguration.insert({
	  service: "fitbit",
	  consumerKey: "your key",
	  secret: "your secret"
	});
});
Meteor.methods({
	mySteps: function () {
		
		var data = fitbit.getSteps().data;
		
		for (var key in data["activities-steps"])
			ActivitiesSteps.update(
				{ dateTime: data["activities-steps"][key]["dateTime"]},
					{
						$set: {
							dateTime: data["activities-steps"][key]["dateTime"],
							value: data["activities-steps"][key]["value"]
						}					
					},
				{ upsert: true }
			)
	  }
});