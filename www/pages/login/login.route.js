angular.module('starter.routes')

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'pages/login/login.html',
      controller: 'loginCtrl',
      controllerAs : 'vm'
    })
    .state('newaccount', {
          url: '/newAccount',
          templateUrl: 'pages/login/newAccount.html',
          controller: 'newAccountCtrl',
          controllerAs : 'vm'
        })
});