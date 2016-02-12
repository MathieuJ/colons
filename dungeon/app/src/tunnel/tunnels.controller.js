(function() {

  angular
    .module('tunnels')
    .controller('TunnelsController', [
      'PartieService', '$timeout',
      TunnelsController
    ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function TunnelsController(PartieService, $timeout) {
    var self = this;

    self.users = [];

    PartieService.init();

  }
})();