'use strict';

angular.
  module('oilApp').
    component('navMenu', {
      template:
      '<nav class="navbar navbar-expand-md navbar-dark">' +
        '<div class="collapse navbar-collapse" id="navbarCollapse">' +
          '<ul class="navbar-nav mr-auto">' +
            '<li class="nav-item active">' +
              '<a class="nav-link" href="#">' +
                '<figure class="home-icon"></figure>' +
                '<span class="nav-names">Home</span></a>' +
            '</li>' +
            '<li class="nav-item active">' +
              '<a class="dropdown nav-link" href="#">' +
                '<figure class="category-icon"></figure>' +
                '<span class="nav-names">Categories' +
               '<div class="dropdown-content">' +
                 '<p  class="dropdown-content-list" href="#olive">' +
                  'Olives' +
                    '<span class="drowdown-content-list-icon">' + '<img src="css/assets/svg/olive.svg"/></span> </p>' +
                '<p class="dropdown-content-list" href="#cheese">Cheese <span class="drowdown-content-list-icon"><img src="css/assets/svg/cheese.svg"/></span></p>' +
                '<p class="dropdown-content-list" href="#milk">Milk <span class="drowdown-content-list-icon"><img src="css/assets/svg/milk.svg"/></span></p>' +
        '</div>' +
        '</span>' +
        '</a>' +
        '</li>' +
        '<li class="nav-item active">' +
          '<a class="nav-link" href="#">' +
            '<figure class="about-icon"></figure>' +
            '<span class="nav-names">About Us</span></a>' +
        '</li>' +
        '<li class="nav-item active">' +
          '<a class="nav-link" href="#">' +
            '<figure class="contact-icon"></figure>' +
            '<span class="nav-names">Contact Us</span></a>' +
        '</li>' +
        '<a class="nav-link">' +
          '<figure class="site-icon"></figure>' +
        '</a>' +
        '</ul>' +
        '<form class="form-inline mt-2 mt-md-0">' +
          '<a class="nav-link searchButton" href="#search-bar">' +
            '<figure class="search-icon"></figure>' +
            '<span class="nav-names">&nbsp</span></a>' +
          '<input placeholder="search" type="text" id="search-bar"></input>' +
          '<a class="nav-names dropdown nav-link" href="#">' +
            '<figure class="basket-icon"></figure>' +
            '<span>&nbsp' +
               '<div class="dropdown-content-basket">' +
                 '<p  class="dropdown-content-list" href="#olive">Olives <span class="drowdown-content-list-icon"><img src="css/assets/svg/olive.svg"/></span> </p>' +
            '<p class="dropdown-content-list" href="#cheese">Cheese <span class="drowdown-content-list-icon"><img src="css/assets/svg/cheese.svg"/></span></p>' +
            '<p class="dropdown-content-list" href="#milk">Milk <span class="drowdown-content-list-icon"><img src="css/assets/svg/milk.svg"/></span></p>' +
            '</div>' +
            '</span>' +
          '</a>' +
        '</form>' +
        '</div>' +
      '</nav>' +
      '<div class="title-box">' +
        '<form class="title">sign in</form>' +
        '<form id="titleShadow">sign in</form>' +
      '</div>',
      controller: function OilListController() {
      }

    });
