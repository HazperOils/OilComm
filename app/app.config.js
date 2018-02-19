'use strict';

angular.
  module('oilApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/products', {
          template: '<product-list></product-list>'
        }).
        when('/products/:productId', {
          template: '<product-detail></product-detail>'
        }).
        when('/categories/', {
          template: '<category-list></category-list>'
        }).
        when('/categories/:categoryId', {
          template: '<product-list></product-list>'
        }).
        otherwise('/categories');
    }
  ]);
