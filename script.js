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
          templateUrl : 'pages/contact.html',
          controller: 'contactController'
        })
        .when('/projects', {
          templateUrl: 'pages/projects.html'
        })
        .when('/lambda-engine', {
          templateUrl: 'pages/projects/lambda-engine.html',
          controller: 'lambdaEngineController'
        })
        .when('/the-village', {
          templateUrl: 'pages/projects/the-village.html',
          controller: 'theVillageController'
        })
        .when('/dynasty', {
          templateUrl: 'pages/projects/dynasty.html',
          controller: 'dynastyController'
        })
        .when('/pez-audio-player', {
          templateUrl: 'pages/projects/pez-audio-player.html',
          controller: 'pezAudioPlayerController'
        })
        .when('/constellation-series', {
          templateUrl: 'pages/projects/constellation-series.html',
          controller: 'constellationSeriesController'
        })
        .when('/eclipse', {
          templateUrl: 'pages/projects/eclipse.html',
          controller: 'eclipseController'
        })
        .when('/hire', {
          templateUrl: 'pages/projects/hire.html',
          controller: 'hireController'
        })
        .when('/jchrome', {
          templateUrl: 'pages/projects/jchrome.html',
          controller: 'jChromeController'
        })
        .when('/tsp-solver', {
          templateUrl: 'pages/projects/tsp-solver.html',
          controller: 'tspSolverController'
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
    $scope.GetNumber = function(num) {
      return new Array(num);
    }
});

portfolio.controller('lambdaEngineController', function($scope){
  $scope.project = $scope.data.projects.list[0];
});
portfolio.controller('eclipseController', function($scope){
  $scope.project = $scope.data.projects.list[1];
});
portfolio.controller('jChromeController', function($scope){
  $scope.project = $scope.data.projects.list[2];
});
portfolio.controller('theVillageController', function($scope){
  $scope.project = $scope.data.projects.list[3];
});
portfolio.controller('pezAudioPlayerController', function($scope){
  $scope.project = $scope.data.projects.list[4];
});
portfolio.controller('constellationSeriesController', function($scope){
  $scope.project = $scope.data.projects.list[5];
});
portfolio.controller('tspSolverController', function($scope){
  $scope.project = $scope.data.projects.list[6];
});
portfolio.controller('hireController', function($scope){
  $scope.project = $scope.data.projects.list[7];
});
portfolio.controller('dynastyController', function($scope){
  $scope.project = $scope.data.projects.list[8];
});
portfolio.controller('contactController', function($scope, $http){
  $scope.message = {};
  $scope.success = false;
  $scope.error = false;
  $scope.SendMessage = function(){
    $http.post('/send', $scope.message).then(successCallback, errorCallback);
    function successCallback(){
      $scope.message = angular.copy({});
      $scope.mailForm.$setPristine();
      $scope.mailForm.$setUntouched();
      $scope.mailForm.$rollbackViewValue();
      $scope.success = true;
    }
    function errorCallback(){
      $scope.message = angular.copy({});
      $scope.mailForm.$setPristine();
      $scope.mailForm.$setUntouched();
      $scope.mailForm.$rollbackViewValue();
      $scope.error = true;
    }
  }
});
