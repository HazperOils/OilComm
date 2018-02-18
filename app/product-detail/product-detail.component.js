'use strict';

angular.
  module('productDetail').
  component('productDetail', {
    templateUrl: 'product-detail/product-detail.template.html',
    controller: ['$http', '$routeParams',
      function ProductDetailController($http, $routeParams) {
        var self = this;
        $http.get('products/' + $routeParams.productId + '.json').then(function(response) {
          self.product = response.data;
        });
      }
    ]
  });
