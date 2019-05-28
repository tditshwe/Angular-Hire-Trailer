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

			$http.post("http://localhost:50227/api/client", client).then(function(response)
			{
				$location.path('/clients')
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