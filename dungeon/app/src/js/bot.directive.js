(function() {
  'use strict';

  angular.module('dungeon')
    .directive('bot', function() {
      return {
        restrict: 'E',
        replace: true,
        scope: {
          bot: '='
        },
        templateUrl: 'src/templates/bot-directive.html',
        link: function(scope, element, attrs, fn) {

        }
      }
    }
  )
  ;
})();