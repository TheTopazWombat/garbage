angular.module('app')
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
      .otherwise('/');

    $stateProvider
    .state('landing', {
      url: '/',
      // controller: './app/controllers/userCtrl.js',
      templateUrl: 'assets/templates/landing.html'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'assets/templates/login.html'
    })
    .state('cm-info', {
      url: '/cm-info',
      templateUrl: 'assets/templates/cm-info-tech.html'
    })
    .state('cm-home', {
      url: '/cm-home',
      templateUrl: 'assets/templates/cm-home.html'
    })
    .state('tech-sched', {
      url: '/tech-sched',
      templateUrl: 'assets/templates/tech-sched.html'
    })
    .state('tech-home', {
      url: '/tech-home',
      templateUrl: 'assets/templates/tech-home.html',
    });
  });
