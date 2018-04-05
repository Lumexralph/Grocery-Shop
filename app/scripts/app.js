'use strict';

/**
 * @ngdoc overview
 * @name mod2LabApp
 * @description
 * # mod2LabApp
 *
 * Main module of the application.
 */
angular
  .module('mod2LabApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui.bootstrap.tpls'
  ])
  .config(['$routeProvider', '$locationProvider', 
  function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about/', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/shop/', {
        templateUrl: 'views/shop.html',
        controller: 'ShopController',
        controllerAs: 'shop'
      })
      .when('/product', {
        templateUrl: 'views/product.html',
        controller: 'ProductController',
        controllerAs: 'prod'

      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartController',
        controllerAs: 'cart'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
]);
