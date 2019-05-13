angular.module('core.hiring').
	factory('Hiring', function() {
		var aGet = {};
		var active = "client";
		var itemPath = '/createclient';
		var item = 'Client';

		return {
			axiosGet: axiosGet,
			active: getActive(),
			itemPath: getItemPath(),
			item: getItem(),
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
	}
);