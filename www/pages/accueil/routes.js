angular.module('starter.routes')
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tab.accueil', {
      url: '/accueil',
      views: {
        'tabAcc': {
          templateUrl: 'pages/accueil/tab-accueil.html',
          controller: 'AccueilCtrl',
          controllerAs: 'vm'
        }
      }
    })
    .state('tab.recherche', {
      url: '/recherche',
      views: {
        'tabAcc': {
          templateUrl: 'pages/accueil/recherche.html',
          controller: 'RechercheCtrl',
          controllerAs: 'vm'
        }
      }
    })
    .state('tab.jeu', {
          url: '/jeu/:idbgg',
          params : { 'jeu' : null},
          views: {
            'tabAcc': {
              templateUrl: 'pages/accueil/jeu.html',
              controller: 'JeuCtrl',
              controllerAs: 'vm'
            }
          }
        })
});