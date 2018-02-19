'use strict';

angular.
  module('categoryList').
    component('categoryList', {
      templateUrl: 'category-list/category-list.template.html',
      controller: ['Category',
      function CategoryListController(Category) {
        this.categories = Category.query();
      }
    ]
});
