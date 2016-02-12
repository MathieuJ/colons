(function() {
  'use strict';

  angular.module('pont')
    .directive('boost', function() {
      return {
        restrict: 'E',
        replace: true,
        scope: {
          boost: '='
        },
        templateUrl: 'src/pont/boost-directive.html',
        link: function(scope, element, attrs, fn) {

        }
      }
    }
  )
  ;
})();