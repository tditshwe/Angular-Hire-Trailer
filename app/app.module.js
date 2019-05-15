'use strict';

// Define the `hireTrailerApp` module
angular.module('hireTrailerApp', [
  'ngRoute',
  'core',
  'clients',
  'createClient',
  'createRental'
]);

angular.module('clients', ['listTable']);
angular.module('core', ['core.hiring']);
angular.module('core.hiring', []);
angular.module('listTable', []);
angular.module('createClient', []);
angular.module('createRental', []);
