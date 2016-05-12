'use strict';

angular
  .module('organigramaApp', [
    'ngRoute',
    'ngAnimate', 'mgcrea.ngStrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/org.html',
        controller: 'InicioCtrl'
      })
      .when('/subdireccion/:sub', {
        templateUrl: 'views/subdireccion.html',
        controller: 'SubsCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
