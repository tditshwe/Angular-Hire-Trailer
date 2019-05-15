angular.module("createRental").component("createRental", {
	templateUrl: 'templates/create-rental.template.html',
	controller: function clientController($http, $location, Hiring)
	{
		this.createClient = function()
		{
			Hiring.setLocation('rental')
			$location.path('/createclient');
		}
	}
});