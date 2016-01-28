angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('tabsController.accueil', {
      url: '/accueil',
      views: {
        'tab1': {
          templateUrl: 'templates/accueil.html',
          controller: 'accueilCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.mesJeux', {
      url: '/jeux',
      views: {
        'tab2': {
          templateUrl: 'templates/mesJeux.html',
          controller: 'mesJeuxCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.mesAmis', {
      url: '/joueurs',
      views: {
        'tab3': {
          templateUrl: 'templates/mesAmis.html',
          controller: 'mesAmisCtrl'
        }
      }
    })
        
      
    
      
    .state('tabsController', {
      url: '/page1',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    
      
        
    .state('tabsController.ficheJeu', {
      url: '/jeu',
      views: {
        'tab2': {
          templateUrl: 'templates/ficheJeu.html',
          controller: 'ficheJeuCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.ficheAmi', {
      url: '/joueur',
      views: {
        'tab3': {
          templateUrl: 'templates/ficheAmi.html',
          controller: 'ficheAmiCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.pretsDeJeux', {
      url: '/prets',
      views: {
        'tab2': {
          templateUrl: 'templates/pretsDeJeux.html',
          controller: 'pretsDeJeuxCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.parties', {
      url: '/parties',
      views: {
        'tab7': {
          templateUrl: 'templates/parties.html',
          controller: 'partiesCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.partie', {
      url: '/partie',
      views: {
        'tab7': {
          templateUrl: 'templates/partie.html',
          controller: 'partieCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.outils', {
      url: '/outils',
      views: {
        'tab7': {
          templateUrl: 'templates/outils.html',
          controller: 'outilsCtrl'
        }
      }
    })
        
      
    
      
        
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })
        
      
    
      
        
    .state('tabsController.parametres', {
      url: '/parametres',
      views: {
        'tab1': {
          templateUrl: 'templates/parametres.html',
          controller: 'parametresCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.rechercheDeJeux', {
      url: '/recherche',
      views: {
        'tab8': {
          templateUrl: 'templates/rechercheDeJeux.html',
          controller: 'rechercheDeJeuxCtrl'
        }
      }
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page1/accueil');

});