angular.module("createClient").component("createClient", {
	templateUrl: 'templates/create-client.template.html',
	controller: function clientController($http, $location, Hiring)
	{
		this.createClient = function()
		{
			let client = {
				name: this.name,
				lastname: this.lastname,
				email: this.email
			}

			Hiring.config.done(function()
			{
				$http.post(Hiring.getBaseUrl() + "/api/client/createclient", client).then(function(response)
				{
					if (Hiring.creating)
					{
						Hiring.newClient = response.data
						$location.path('/createrental')
					}
					else
						$location.path('/clients')
				});
			});
		}

		this.back = function()
		{
			if (Hiring.creating)
				$location.path('/createrental')
			else
				$location.path('/clients')
		}
	}
});