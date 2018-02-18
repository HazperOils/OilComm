'use strict';

angular.
  module('productDetail').
  component('productDetail', {
    templateUrl: 'product-detail/product-detail.template.html',
    controller: ['$http', '$routeParams', '$scope',
      function ProductDetailController($http, $routeParams, $scope) {
        var self = this;
        $scope.quantity = 1;
        $http.get('products/' + $routeParams.productId + '.json').then(function(response) {
          self.product = response.data;
        });
      }
    ]
  });
