(function() {
  'use strict';

  angular.module('pont')
    .directive('bot', function() {
      return {
        restrict: 'E',
        replace: true,
        scope: {
          bot: '='
        },
        templateUrl: 'src/pont/bot-directive.html',
        link: function(scope, element, attrs, fn) {

        }
      }
    }
  )
  ;
})();