'use strict';

var app = angular.module('productApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl : '/html/home.html',
      controller: 'homeController'
    })
    .state('add', {
      url:'/add',
      templateUrl: '/html/addProduct.html',
      controller: 'addController'
    })
    .state('list', {
      url:'/list',
      templateUrl: '/html/productList.html',
      controller: 'listController'
    })
    .state('detail', {
      url: '/detail/:id',
      templateUrl: '/html/detail.html',
      controller: 'detailController'
    })





});
