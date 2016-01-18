var app = angular.module('appMar', [ 'ngAnimate', 'ui.router']);

app
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/start");
        $stateProvider
            .state('start', {
                url: '/start',
                templateUrl: 'partials/start.html',
                controller: 'startController'
            })
            .state('start.noms', {
                url: '/noms',
                templateUrl: 'partials/start-noms.html'
            })
            .state('start.blocs', {
                url: '/blocs',
                templateUrl: 'partials/start-blocs.html'
            })
            .state('start.config', {
                url: '/config',
                templateUrl: 'partials/start-config.html'
            })
            .state('start.comptes', {
                url: '/comptes',
                templateUrl: 'partials/start-comptes.html'
            });
        $urlRouterProvider.otherwise('/start');
    })
.controller('startController', function($scope, $location) {
    
    // we will store all of our form data in this object
    $scope.formData = {};
    
    // function to process the form
    $scope.processForm = function() {
       // alert('awesome!');
    };

    
})
.controller('MainCtrl', function($scope, Colon) {
        $scope.name = 'World';
        //$scope.mariage = new Mariage();

    })
    .factory('Mariage', function() {
        var Mariage = function() {
            this.dateCreation = new Date();
            this.budget = false;
            this.mariageReligieux = true;
            this.mariageCivil = true;
            this.enterrementMarie1 = false;
            this.enterrementMarie2 = false;
            this.soiree = false;
        };
        return Mariage;
    })
    .factory('Personne', function() {
        var Personne = function(nom, mail) {
            this.nom = nom;
            this.mail = mail;
        };

        return Personne;
    })
    
    .service('viewSlideIndex', function () {
    var viewIndex;
    var maxViewIndex;
    return {
        getViewIndex: function () {
            return viewIndex;
        },
        setViewIndex: function (val) {
            viewIndex = val;
            if (maxViewIndex < viewIndex) {
                maxViewIndex = viewIndex;
            }
        }
    };
    })
    ;
