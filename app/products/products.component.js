'use strict';

angular.module('products').component('products', {
  templateUrl: 'products/products.template.html',
  controller: function ProductsController($http) {
    var self = this;
    $http.get('products/products.json').then(function(response) {
      self.products = response.data;
      console.log(self.products);
    });
  }
});
