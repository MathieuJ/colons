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
      'MariageService', '$timeout',
      SaisieEvenementsController
    ])
    .controller('SaisieConfigController', [
      '$timeout',
      SaisieConfigController
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
    MariageService.init();

    self.etape = MariageService.etape;
  }
  function SaisieNomsController(MariageService, $state) {
    var self = this;

    self.mariage = MariageService;

    console.log("noms", $state);

    self.valide = function() {
      $state.go("^.evenements");
    }
  }
  function SaisieEvenementsController(MariageService, $timeout) {
    var self = this;

    self.mariage = MariageService;

    self.valide = function() {
      $state.go("^.config");
    }
  }
  function SaisieConfigController(MariageService, $timeout) {
    var self = this;


    self.marie1 = MariageService.marie1;
    self.marie2 = MariageService.marie2;

  }
})();