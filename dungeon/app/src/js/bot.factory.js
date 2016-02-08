(function(){
  'use strict';

  angular.module('dungeon')
    .factory('Bot', [Bot]);

  function Bot(){
    var Bot = function(s, e) {
      this.force = s;
      this.endu = e;
      this.degats = 0;
    };
    Bot.prototype = {
      applyBoost : function(boost) {
        if (boost === 'force1') {
          this.force += 1;
        } else if (boost === 'endu1') {
          this.endu += 1;
        } else if (boost === 'autosoin') {
          this.autosoin = 1;
        }
      },
      faitDegats : function(p) {
        this.degats += p;
      }
    };
    return Bot;
  }

})();
