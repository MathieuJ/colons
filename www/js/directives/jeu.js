angular.module('starter.controllers')
    .directive('jeu', function() {
  return {
    restrict: 'E',
        scope: {
          jeu: '=',
          click : '=click'

        },
        templateUrl: 'js/directives/jeu.html'

  };
});