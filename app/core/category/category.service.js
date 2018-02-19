'use strict';

angular.
  module('core.category').
  factory('Category', ['$resource',
    function($resource) {
      return $resource('categories/:categoryId.json', {}, {
        query: {
          method: 'GET',
          params: {categoryId: 'categories'},
          isArray: true
        }
      });
    }
  ]);
