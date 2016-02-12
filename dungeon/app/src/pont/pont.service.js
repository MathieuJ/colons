(function(){
  'use strict';

  angular.module('pont')
    .service('pontService', ['Bot', 'Boost', 'Joueur', PontService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function PontService(Bot, Boost, Joueur){
    var Partie = {
      'joueur1' : new Joueur('joueur1', 10, 'pdv1'),
      'joueur2' : new Joueur('joueur2', 10, 'pdv2'),
      'boosts' : [new Boost("force", "for1", 5), new Boost("endu", "end1", 10), new Boost("soin", "soin1", 12),
        new Boost("poison", "poi1", 7), new Boost("bouclier", "bou1", 3)
      ]
    };

    // Promise-based API
    return {
      getPartie : function() {
        return Partie;
      },
      init : function() {
        Partie.joueur1.init();
        Partie.joueur2.init();
      },
      valideAchats : function(cote, index, boost) {
        if (cote === 1) {
          Partie.joueur1.boosts[index] = boost;
          Partie.boosts.remove(boost);
        } else {
          Partie.joueur1.boosts[index] = boost;
          Partie.boosts.remove(boost);
        }
      },
      combat : function() {
        console.log("combat");
        for (var i = 1; i < 20; i++) {
          var b1 = Partie.joueur1.queue[i];
          var b2 = Partie.joueur2.queue[20-i];
          if (!!b1 && !!b2) {
            b1.faitDegats(b2.force);
            b2.faitDegats(b1.force);
          }
        }
      },
      avance : function() {
        console.log("avance");
        for (var i = 1; i < 20; i++) {
          var b1 = Partie.joueur1.queue[i];
          var b2 = Partie.joueur2.queue[i];
          console.log(b1, b2);
          if (b1 && b1.isMort()) {
            Partie.joueur1.queue[i] = undefined;
            Partie.joueur2.or++;
          }
          if (b2 && b2.isMort()) {
            Partie.joueur2.queue[i] = undefined;
            Partie.joueur1.or++;
          }
        }
        Partie.joueur1.queue.shift();
        Partie.joueur1.queue.push(new Bot(1, 3));
        Partie.joueur2.queue.shift();
        Partie.joueur2.queue.push(new Bot(1, 3));
      },
      ameliore : function() {
        console.log("ameliore");
      }

    };
  }

})();
