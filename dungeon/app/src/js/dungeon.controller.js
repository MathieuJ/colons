(function() {

  angular
    .module('dungeon')
    .controller('DungeonController', [
      'dungeonService', '$timeout',
      DungeonController
    ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function DungeonController(DungeonService, $timeout) {
    var self = this;

    self.users = [];

    DungeonService.init();

    self.partie = DungeonService.getPartie();
    self.queue1 = self.partie.queue1;
    self.queue2 = self.partie.queue2;
    self.joueur1 = self.partie.joueur1;
    self.joueur2 = self.partie.joueur2;

    self.boosts1 = self.partie.joueur1;
    self.boosts2 = self.partie.boosts2;
    self.avance = function() {
      self.action = false;

      DungeonService.combat();
      $timeout(function(){
        DungeonService.avance();
        $timeout(function(){
          DungeonService.ameliore();
          $timeout(function(){
            self.action = true;
          }, 500);
        }, 500);
      }, 500);
    }
  }
})();