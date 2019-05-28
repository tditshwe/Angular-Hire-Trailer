angular.module("createRental").component("createRental", {
	templateUrl: 'templates/create-rental.template.html',
	controller: function clientController($http, $location, Hiring)
	{
		var ctrl = this;

		this.$onInit = function()
		{
			this.trailers = [
				{ Registration: "BX 44 CK GP", IsHired: false},
				{ Registration: "JL 44 XP GP", IsHired: false}
			];

			$http.get("http://localhost:50582/api/home").then(function(response)
			{
				ctrl.clients = response.data.Clients;
				ctrl.trailers = response.data.Trailers;
				//alert(JSON.stringify(ctrl.clients));
			});
		}

		this.createClient = function()
		{
			Hiring.creating = true;
			$location.path('/createclient');
		}

		this.complete = function()
		{
			let trailer = JSON.parse(this.trailer)
			alert(this.trailer);
		}
	}
});