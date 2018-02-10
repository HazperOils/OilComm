angular.module('todoApp', [])
  .controller('ProductController', function() {
    var productList = this;
    productList.products = [
      {image:'oil.png',name:'Olive Oil',price:'25,00 $', int:25}];

       productList.basket = 0

      productList.addToBasket = function() {
        productList.basket += productList.products.int;
      };

  });
