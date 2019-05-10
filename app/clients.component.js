'use strict';

angular.module("clients").component("clients", {
	templateUrl: 'templates/clients.template.html',
	controller: function clientController($http, $location, Hiring)
	{
		let ctrl = this;
		var tab = 'client';
		this.itemPath = '/createclient';

		this.clientHeaders = [
			{
				text: "Name",
				value: "Name"
			},
			{
				text: "Lastname",
				value: "LastName"
			},
			{
				text: "Email",
				value: "Email"
			},
			{
				text: "Reg Date",
				value: "DateCreated"
			},
			{
				text: "Last Rental",
				value: "LastRented"
			}
		];

		this.rentalHeaders = [
			{
				text: "Client",
				value: "Client"
			},
			{
				text: "Trailer Hired",
				value: "TrailerRegistration"
			},
			{
				text: "Rental Date",
				value: "DateRented"
			}
		];

		/*this.rentals = [
						  {
						    Client: "Malesela Molamu",
						    TrailerRegistration: "CN 08 LG GP",
						    DateRented: "2019-04-13T14:17:15.567"
						  }
						]*/

		//this.value = Hiring.value();

		this.$onInit = function()
		{
			$http.get("http://localhost:50227/api/home").then(function(response)
			{
				ctrl.clients = response.data.Clients;
				ctrl.rentals = response.data.Rentals;
				//alert(JSON.stringify(ctrl.clients));
			});
		}

		this.tabChange = function(tab)
		{
			switch (tab)
			{
				case 'client':
					itemPath = 'client';
					this.item = 'Client';
					break;
				case 'rental':
					itemPath = 'rental';
					this.item = 'Rental';
					break;
				case 'trailer':
					itemPath = 'trailer';
					this.item = 'Trailer';
					break;
			}
		}

		this.newItem = function(path)
		{
			$location.path(path)
		}
	}
});