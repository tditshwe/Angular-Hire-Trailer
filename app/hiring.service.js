angular.module('core.hiring').
	factory('Hiring', function() {
		var aGet = {};

		return {
			axiosGet: axiosGet
		}

		function axiosGet()
		{
			return aGet;
		}
	}
);