(function() {
  'use strict';

  angular.module('tunnels')
    .directive('guy', function() {
      return {
        restrict: 'E',
        replace: true,
        scope: {
          bot: '='
        },
        templateUrl: 'src/tunnel/guy-directive.html',
        link: function(scope, element, attrs, fn) {

        }
      }
    }
  )
  ;
})();