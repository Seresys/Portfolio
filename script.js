// script.js

// create the module and name it scotchApp
var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate', 'pascalprecht.translate']);

// configure our routes
myApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })
        .when('/resume', {
            templateUrl : 'pages/resume.html',
            controller  : 'resumeController'
        })
        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller  : 'contactController'
        })
        .when('/projects', {
          templateUrl: 'pages/projects.html',
          controller: 'projectController'
        })
        .when('/lambda-engine', {
          templateUrl: 'pages/projects/lambda-engine.html',
          controller: 'projectDetailController'
        })
        .when('/the-village', {
          templateUrl: 'pages/projects/the-village.html',
          controller: 'projectDetailController'
        })
        .when('/eclipse', {
          templateUrl: 'pages/projects/eclipse.html',
          controller: 'projectDetailController'
        })
        .otherwise({
          redirectTo: '/'
        });
});

myApp.config(['$translateProvider', function ($translateProvider) {
  $translateProvider.useSanitizeValueStrategy('escape');
  $translateProvider.translations('en', {
    'home-title': 'My Portfolio',
    'home' : 'Home',
    'resume': 'Resume',
    'projects': 'Projects',
    'contact': 'Contact'
  });

  $translateProvider.translations('fr', {
    'home-title': 'Mon Portfolio',
    'home' : 'Accueil',
    'resume': 'Curriculum-Vitae',
    'projects': 'Réalisations',
    'contact': 'Contact'
  });

  $translateProvider.determinePreferredLanguage(function () {
    var language = window.navigator.userLanguage || window.navigator.language;
    if(language == 'fr' || language == 'en')
      return language;
    else {
      return 'en';
    }
  });
}]);

// create the controller and inject Angular's $scope
myApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and enjoy your journey !';
});

myApp.controller('resumeController', function($scope) {
    $scope.message = 'Look at my resume.';
});

myApp.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});

myApp.controller('projectController', function($scope) {
    $scope.message = 'Here is a list of my last achievements :)';
    $scope.projects = [
      { "name": 'Lambda Engine', "image": 'lambda-engine.PNG', "link": "lambda-engine"},
      { "name": 'Eclipse', "image": 'lambda-engine.PNG', "link": "eclipse"},
      { "name": 'The Village', "image": 'lambda-engine.PNG', "link": "the-village"}
    ];
});

myApp.controller('projectDetailController', function($scope) {
    $scope.message = 'This should look like the detail of a project';
});
