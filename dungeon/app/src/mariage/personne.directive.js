(function() {
  'use strict';

  angular.module('mariage')
    .directive('personne', function() {
      return {
        restrict: 'E',
        replace: true,
        scope: {
          bot: '='
        },
        templateUrl: 'src/mariage/personne-directive.html',
        link: function(scope, element, attrs, fn) {

        }
      }
    }
  )
  ;
})();