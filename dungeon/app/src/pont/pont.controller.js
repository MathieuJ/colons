(function() {

  angular
    .module('pont')
    .controller('PontController', [
      'pontService', '$timeout',
      PontController
    ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function PontController(PontService, $timeout) {
    var self = this;

    self.users = [];
    self.actionEnabled = true;
    PontService.init();

    self.partie = PontService.getPartie();
    self.joueur1 = self.partie.joueur1;
    self.joueur2 = self.partie.joueur2;

    self.selectBoostPlace = function(joueur, index) {
      if (joueur == 1) {
        self.boosts1[index] = {'nom' : 'exp'};
      } else {
        self.boosts2[index] = {'nom' : 'exp'};
      }
    };

    self.avance = function() {
      self.actionEnabled = false;

      //PontService.valideAchats(self.partie.);

      PontService.combat();
      $timeout(function(){
        PontService.avance();
        $timeout(function(){
          PontService.ameliore();
          $timeout(function(){
            self.actionEnabled = true;
          }, 500);
        }, 500);
      }, 500);
    };
  }
})();