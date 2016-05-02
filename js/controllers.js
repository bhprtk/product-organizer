'use strict';

var app = angular.module('productApp');

app.controller('homeController', function() {
  console.log('homeController');
});

app.controller('addController', function($scope, Products) {
  $scope.createProduct = () => {
    Products.create($scope.newProduct);
   };
   console.log('addController');
});

app.controller('listController', function($scope, Products) {
  console.log('listController');
  $scope.products = Products.getData();

  //sortBy()

  $scope.sortBy = (order) => {
       if($scope.sortOrder === order) {
         $scope.sortOrder = `-${order}`;
       } else {
         $scope.sortOrder = order;
       }
     };
});

app.controller('detailController', function($scope, $stateParams, Products) {

  console.log($stateParams.id);
});
