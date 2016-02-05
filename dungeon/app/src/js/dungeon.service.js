(function(){
  'use strict';

  angular.module('dungeon')
    .service('dungeonService', ['Bot', DungeonService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function DungeonService(Bot){
    var Partie = {
      'joueur1' : {'nom' : 'joueur1', 'bonus' : 'pdv1', 'or' : 0},
      'joueur2' : {'nom' : 'joueur2', 'bonus' : 'pdv1', 'or': 0},
      'queue1' : [],
      'queue2' : [],
      'avancee1' : 10,
      'avancee2' : 10,
      'boosts' : [{'nom' : 'pv1'}, {'nom' : 'atk1'}, {'nom' : 'dist1'}],
      'boosts1' : [],
      'boosts2' : []
    }

    // Promise-based API
    return {
      getPartie : function() {
        return Partie;
      },
      init : function() {
        var i;
        for (i = 0; i < 10; i++) {
          Partie.queue1.push(undefined);
          Partie.queue2.push(undefined);
          Partie.boosts1.push(undefined);
          Partie.boosts2.push(undefined);
        }
        for (i = 0; i < 10; i++) {
          Partie.queue1.push(new Bot(1, 3));
        }
        for (i = 0; i < 10; i++) {
          Partie.queue2.push(new Bot(1, 3));
        }
      },
      combat : function() {
        console.log("combat");
        for (var i = 1; i < 20; i++) {
          var b1 = Partie.queue1[i];
          var b2 = Partie.queue2[20-i];
          if (!!b1 && !!b2) {
            b1.e -= b2.s;
            b2.e -= b1.s;
          }
        }
      },
      avance : function() {
        console.log("avance");
        for (var i = 1; i < 20; i++) {
          var b1 = Partie.queue1[i];
          var b2 = Partie.queue2[i];
          if (b1 && b1.e <= 0) {
            Partie.queue1[i] = undefined;
            Partie.joueur2.or++;
          }
          if (b2 && b2.e <= 0) {
            Partie.queue2[i] = undefined;
            Partie.joueur1.or++;
          }
        }
        Partie.queue1.shift();
        Partie.queue1.push(new Bot(1, 3));
        Partie.queue2.shift();
        Partie.queue2.push(new Bot(1, 3));
      },
      ameliore : function() {
        console.log("ameliore");
      }

    };
  }

})();
