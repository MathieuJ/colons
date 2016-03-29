angular
  .module('starterApp', ['ngMaterial', 'users', 'ui.router', 'pont', 'tunnels', 'mariage', 'LocalStorageModule'])
  .config(function($mdThemingProvider, $mdIconProvider, $stateProvider, $urlRouterProvider){

    $mdIconProvider
      .defaultIconSet("./assets/svg/avatars.svg", 128)
      .icon("menu"       , "./assets/svg/menu.svg"        , 24)
      .icon("share"      , "./assets/svg/share.svg"       , 24)
      .icon("google_plus", "./assets/svg/google_plus.svg" , 512)
      .icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
      .icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
      .icon("phone"      , "./assets/svg/phone.svg"       , 512);

    $mdThemingProvider.theme('default')
      .primaryPalette('brown')
      .accentPalette('red');

      $urlRouterProvider.otherwise("/start");
      $stateProvider
        .state('start', {
          url: '/start',
          templateUrl: 'src/templates/material.html',
          controller: 'UserController',
          controllerAs : 'ul'
        }).state('pont', {
          url: '/pont',
          templateUrl: 'src/pont/pont.html',
          controller: 'PontController',
          controllerAs : 'dc'
        }).state('tunnel', {
          url: '/tunnel',
          templateUrl: 'src/tunnel/tunnels.html',
          controller: 'TunnelsController',
          controllerAs : 'dc'
        });
      $urlRouterProvider.otherwise('/start');






  });
