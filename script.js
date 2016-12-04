// script.js

// create the module and name it
var portfolio = angular.module('portfolio', ['ngRoute', 'ngAnimate']);

// configure our routes
portfolio.config(function($routeProvider) {
    $routeProvider
        .when('/', {
          templateUrl : 'pages/home.html'
        })
        .when('/resume', {
          templateUrl : 'pages/resume.html'
        })
        .when('/contact', {
          templateUrl : 'pages/contact.html'
        })
        .when('/projects', {
          templateUrl: 'pages/projects.html'
        })
        .when('/lambda-engine', {
          templateUrl: 'pages/projects/lambda-engine.html'
        })
        .when('/the-village', {
          templateUrl: 'pages/projects/the-village.html'
        })
        .when('/dynasty', {
          templateUrl: 'pages/projects/dynasty.html'
        })
        .when('/pez-audio-player', {
          templateUrl: 'pages/projects/pez-audio-player.html'
        })
        .when('/constellation-series', {
          templateUrl: 'pages/projects/constellation-series.html'
        })
        .when('/eclipse', {
          templateUrl: 'pages/projects/eclipse.html'
        })
        .when('/hire', {
          templateUrl: 'pages/projects/hire.html'
        })
        .when('/jchrome', {
          templateUrl: 'pages/projects/jchrome.html'
        })
        .when('/tsp-solver', {
          templateUrl: 'pages/projects/tsp-solver.html'
        })
        .otherwise({
          redirectTo: '/'
        });
});
// create the controller and inject Angular's $scope
portfolio.controller('mainController', function($scope, $http) {
    var language = window.navigator.userLanguage || window.navigator.language;
    if(language == 'fr')
      $http.get('i18n/fr.json')
       .then(function(res){
          $scope.data = res.data;
      });
    else {
      $http.get('i18n/en.json')
       .then(function(res){
          $scope.data = res.data;
      });
    }
    $scope.SetProject = function(id){
      $scope.project = $scope.data.projects.list[id];
    }
});
