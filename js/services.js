'use strict';

var app = angular.module('productApp');
var id = 2;
var data = [
  {
    id: 1,
    name: 'laptop',
    desc: 'Mac Air 2013',
    price: 1000,
    category: 'electronics',
    image: 'http://images.apple.com/macbook-air/images/overview_wireless_hero_enhanced.png'
  },
  {
    id: 2,
    name: 'phone',
    desc: 'Moto X Pure',
    price: 500,
    category: 'electronics',
    image: 'http://o.aolcdn.com/hss/storage/midas/f6edf6c340d0757c2c9524cfe4f715ca/202549289/xpure-fullbleed.jpg'
  }
];


app.service('Products', function() {

  this.getData = () => {
    return data;
  };



  this.create = (product) => {
    product.id = id++;
    data.push(product);
    return(data);
  };

  // this.getById = (id) => {
  //   data.forEach(function(d) {
  //     if(d.id === id) {
  //       return d;
  //     }
  //     }
  //   });
  
});
