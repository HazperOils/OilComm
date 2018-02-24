'use strict';

angular.
  module('navMenu').
  component('navMenu', {
    templateUrl: 'nav-menu/nav-menu.template.html',
    controller: ['Category',
    function CategoryListController(Category) {
      this.categories = Category.query();
    }
  ]
  });
