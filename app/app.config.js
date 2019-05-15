'use strict';

angular.
  module('hireTrailerApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
       /*when('/home', {
          template: '<home></home>'
        }).*/
        when('/clients', {
          template: '<clients></clients>'
        }).
        when('/createclient', {
          template: '<create-client></create-client>'
        }).
        when('/createrental', {
          template: '<create-rental></create-rental>'
        }).
        otherwise('/clients');
    }
  ]);
