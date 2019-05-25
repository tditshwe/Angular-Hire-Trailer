'use strict';

angular.module("clients").component("clients", {
	templateUrl: 'templates/clients.template.html',
	controller: function clientController($http, $location, Hiring)
	{
		let ctrl = this;
		//var tab = 'client';
		
		this.itemPath = Hiring.itemPath;

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
			changeActive();
			this.item = Hiring.item;

			$http.get("http://localhost:50227/api/home").then(function(response)
			{
				ctrl.clients = response.data.Clients;
				ctrl.rentals = response.data.Rentals;
				//alert(JSON.stringify(ctrl.clients));
			});
		}

		this.tabChange = function(tab)
		{
			//alert(tab)
			switch (tab)
			{
				case 'client':
					Hiring.itemPath = '/createclient';
					Hiring.item = 'Client';
					break;
				case 'rental':
					Hiring.itemPath = '/createrental';
					Hiring.item = 'Rental';
					break;
				case 'trailer':
					Hiring.itemPath = '/createtrailer';
					Hiring.item = 'Trailer';
					break;
			}

			Hiring.active = tab;
		}

		this.newItem = function()
		{
			$location.path(Hiring.itemPath)
		}

		function changeActive()
		{
			switch (Hiring.active)
			{
				case 'client':
					ctrl.clientActive = "active";
				break;
				case 'rental':
					ctrl.rentalActive = "active";
				break;
				case 'trailer':
					ctrl.trailerActive = "active";
				break;
			}
		}
	}
});