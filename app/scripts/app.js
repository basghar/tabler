'use strict';

/**
 * @ngdoc overview
 * @name tabler
 * @description
 * # tabler
 *
 * Main module of the application.
 */
angular
  .module('tabler', [
    'ngRoute'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      }) //inject:route
      .otherwise({
        redirectTo: '/'
      });
  });
