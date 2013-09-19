'use strict';

var baseUri = 'http://192.168.6.226:4000'; // Base Uri of the API

angular.module('rpxClientPortalApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
