(function(){
  'use strict';

  angular.module('dungeon')
    .factory('Bot', [Bot]);

  function Bot(){
    var Bot = function(s, e) {
      this.s = s;
      this.e = e;
    };
    Bot.prototype = {
      applyPatch : function(patch) {
        this.s += 1;
      }
    };
    return Bot;
  }

})();
