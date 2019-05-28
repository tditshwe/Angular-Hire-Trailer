angular.module('core.hiring').
	factory('Hiring', function() {
		var aGet = {};
		var active = "client";
		var itemPath = '/createclient';
		var item = 'Client';
		var creating = false;
		var baseUrl;

		return {
			axiosGet: axiosGet,
			active: getActive(),
			itemPath: getItemPath(),
			item: getItem(),
			creating: getCreating(),
			config: getConfig(),
			getBaseUrl: getBaseUrl
		};

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

		function getCreating()
		{
			return creating;
		}

		function getConfig()
		{
			return $.getJSON( "config.json", function(data) {
				/*var items = [];
				$.each(data, function(key, val) {
					items.push( "<li id='" + key + "'>" + val + "</li>" );
					config[key] = val;
				});*/
				baseUrl = data.baseUrl;		 				
			})
			/*.fail(function() {
			    console.log( "error" );
			})*/
		}

		function getBaseUrl()
		{
			return baseUrl;
		}
	}
);