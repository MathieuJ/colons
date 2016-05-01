angular.module('starter.routes', ['auth'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider


        /*.state('tabsController.mesJeux', {
          url: '/mesJeux',
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
              controller: 'mesAmisCtrl',
              controllerAs : 'vm'
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
        .state('tabsController.parametres', {
          url: '/parametres',
          views: {
            'tab1': {
              templateUrl: 'templates/parametres.html',
              controller: 'parametresCtrl'
            }
          }
        })*/

    .state('tab', {
              url: '/tab',
              abstract:true,
              templateUrl: 'templates/tabs.html',
              data : {
                authorities: ['ROLE_USER']
              },
              resolve: {
                  authorize: ['Auth',
                      function (Auth) {
                          return Auth.authorize();
                      }
                  ]
              }
            })








    /*// setup an abstract state for the tabs directive
      .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })
    // Each tab has its own nav history stack:
    .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-dash.html',
          controller: 'DashCtrl'
        }
      }
    })
    .state('tab.chats', {
        url: '/chats',
        views: {
          'tab-chats': {
            templateUrl: 'templates/tab-chats.html',
            controller: 'ChatsCtrl'
          }
        }
      })
      .state('tab.chat-detail', {
        url: '/chats/:chatId',
        views: {
          'tab-chats': {
            templateUrl: 'templates/chat-detail.html',
            controller: 'ChatDetailCtrl'
          }
        }
      })

    .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'templates/tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    });*/

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/accueil');

});