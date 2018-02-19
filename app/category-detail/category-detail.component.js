'use strict';

angular.
  module('categoryDetail').
  component('categoryDetail', {
    templateUrl: 'category-detail/category-detail.template.html',
    controller: ['$http', '$routeParams',
      function CategoryDetailController($http, $routeParams) {
        $http.get('categories/' + $routeParams.categoryId + '.json').then(function(response2) {

        });
      }
    ]
  });
