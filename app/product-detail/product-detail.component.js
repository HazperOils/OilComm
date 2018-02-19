'use strict';

angular.
  module('productDetail').
  component('productDetail', {
    templateUrl: 'product-detail/product-detail.template.html',
    controller: ['Product', '$routeParams', '$scope',
      function ProductDetailController(Product, $routeParams, $scope) {
        var self = this;
        $scope.quantity = 1;
       self.product = Product.get({productId: $routeParams.productId}, function(product) {

       });
      }
    ]
  });
