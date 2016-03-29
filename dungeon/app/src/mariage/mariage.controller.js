(function() {

  angular
    .module('mariage')
    .controller('MariageController', [
      'MariageService',
      MariageController
    ])
    .controller('SaisieNomsController', [
      'MariageService', '$state',
      SaisieNomsController
    ])
    .controller('SaisieEvenementsController', [
      'MariageService', '$state',
      SaisieEvenementsController
    ])
    .controller('SaisieConfigController', [
      'MariageService', '$state',
      SaisieConfigController
    ])
    .controller('ResumeController', [
      'MariageService', '$state',
      ResumeController
    ])
    .controller('BudgetController', [
      'MariageService', '$state',
      BudgetController
    ])
    .controller('InvitesController', [
      'MariageService', 'Personne', '$state',
      InvitesController
    ])


  ;

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function MariageController(MariageService) {
    var self = this;
    console.log("mariage base");
    MariageService.get();

    self.etape = MariageService.etape;
  }
  function SaisieNomsController(MariageService, $state) {
    var self = this;

    self.mariage = MariageService.get();

    console.log("noms", $state);

    self.valide = function() {
      MariageService.save();
      $state.go("^.evenements");
    }
  }
  function SaisieEvenementsController(MariageService, $state) {
    var self = this;

    self.mariage = MariageService.get();

    self.valide = function() {
      MariageService.save();
      $state.go("^.config");
    }
  }
  function SaisieConfigController(MariageService, $state) {
    var self = this;

    self.mariage = MariageService.get();
    
    self.valide = function() {
      MariageService.save();
      $state.go("^.resume");
    }
  }
  function ResumeController(MariageService, $state) {
    var self = this;

    self.mariage = MariageService.get();
  }
  function BudgetController(MariageService, $state) {
    var self = this;

    self.mariage = MariageService.get();
  }
  function InvitesController(MariageService, Personne, $state) {
    var self = this;

    self.mariage = MariageService.get();
    
    self.ajoute = function() {
      var p = new Personne(self.nom, 1, 'M');
      MariageService.addInvite(p);
      p.nombre = self.nombre;
      console.log(self.mariage);
      MariageService.save();
    }
  }
})();
