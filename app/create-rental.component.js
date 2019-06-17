angular.module("createRental").component("createRental", {
	templateUrl: 'templates/create-rental.template.html',
	controller: function clientController($http, $location, Hiring)
	{
		var ctrl = this;

		this.$onInit = function()
		{
			Hiring.config.done(function()
			{			
				$http.post(Hiring.getBaseUrl() + "/api/home/available").then(function(response)
				{
					ctrl.clients = response.data.Clients;
					ctrl.trailers = response.data.Trailers;

					if (Hiring.newClient !== undefined)
						ctrl.clientId = String(Hiring.newClient.Id);
					else
						ctrl.clientId = "0"

					ctrl.trailerReg = Hiring.trailReg
						
				});
			});
		}

		this.createClient = function()
		{
			Hiring.creating = true;
			Hiring.trailReg = ctrl.trailerReg;
			$location.path('/createclient');
		}

		this.complete = function()
		{
			//this.clientId = Hiring.newClient.Id;
			//let trailerId = JSON.parse(this.trailer)
			//alert();

			let rental = {
				TraileRegistration: this.trailerReg,
				clientId: parseInt(this.clientId)
			};
			
			Hiring.config.done(function()
			{			
				$http.post(Hiring.getBaseUrl() + "/api/rental", rental).then(function(response)
				{
					//alert(JSON.stringify(response.data))
					Hiring.creating = false;
					$location.path('/clients');
				});
			});
		}

		this.back = function()
		{
			Hiring.creating = false
			$location.path('/clients')
		}
	}
});