'use strict';

angular.
  module('core.product').
  factory('Product', ['$resource',
    function($resource) {
      return $resource('products/:productId.json', {}, {
        query: {
          method: 'GET',
          params: {productId: 'products'},
          isArray: true
        }
      });
    }
  ]);
