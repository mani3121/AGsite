var apApp = angular.module('mainApp',['ui.bootstrap','slick','ui.router']);
apApp.config(function($stateProvider, $urlRouterProvider) {
  //$stateProvider & $urlRouterProvider should be injected in the same manner
  //don't forget to add angular-ui-router.js in your index file
  // 'ui.router' should be injected to the main module
  console.log($stateProvider)
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('course.tpl.html',{
    url: "/Course",
    templateUrl: "app/partilals/course.tpl.html",
    controller: "mainCtrl"
  })
  .state('about',{
    url: "/AboutUs",
    templateUrl: "app/partilals/aboutUs.tpl.html",
	controller:"aboutUsCtrl"
  })
  .state('home',{
    url: "/",
    templateUrl: "app/partilals/home.tpl.html",
	controller: "mainCtrl"
  });
});