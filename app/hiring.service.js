angular.module('core.hiring').
	factory('Hiring', function() {
		var aGet = {};
		var active = "client";
		var itemPath = '/createclient';
		var item = 'Client';
		var location;

		return {
			axiosGet: axiosGet,
			active: getActive(),
			itemPath: getItemPath(),
			item: getItem(),
			location: getLocation(),
			setLocation: setLocation
		}

		function axiosGet()
		{
			return aGet;
		}

		function getActive()
		{
			return active;
		}

		function getItemPath()
		{
			return itemPath;
		}

		function getItem()
		{
			return item;
		}

		function getLocation()
		{
			return location;
		}

		function setLocation(loc)
		{
			location = loc;
		}
	}
);