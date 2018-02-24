'use strict';

angular.
  module('productDetail').
  component('productDetail', {
    templateUrl: 'product-detail/product-detail.template.html',
    controller: ['Product', '$routeParams', '$scope',
      function ProductDetailController(Product, $routeParams, $scope) {
        var self = this;
       self.product = Product.get({productId: $routeParams.productId}, function(product) {
         $scope.price = self.product.price;
       });
        $scope.quantity = 1;
        $scope.incrementQuantity = function () {
          $scope.quantity +=1;
          $scope.price = self.product.price * $scope.quantity;
          return $scope.quantity;
        }

        $scope.decreaseQuantity = function () {
          if($scope.quantity > 1){
            $scope.quantity -=1;
            $scope.price = self.product.price * $scope.quantity;
            return $scope.quantity;
          }
        }


      }
    ]
  });
