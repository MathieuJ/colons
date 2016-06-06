

angular.module('Mtgfrdd', []).controller('MtgfrddCtrl', function($scope, $interval){
    var partie = new Partie();
    partie.demarre();

    $scope.partie = partie;

    $scope.tab = 'choix';
    //$scope.tab = 'carte';

    $scope.valider = function() {
        $scope.resultat = partie.termineTour();
        console.log($scope.resultat);
        $scope.tab='resume';
    };
    $scope.selectColon = function(colon) {
        $scope.gui.selectedColon = colon;
        $scope.gui.selectedMission = null;
        $scope.gui.selectedSubMission = null;
        $scope.gui.selectedBatiment = null;
    }
    $scope.selectZone = function(zone) {
        $scope.gui.selectedZone = zone;
    };
    $scope.commencerChantier = function(chantier) {
        $scope.partie.commencerChantier($scope.gui.selectedZone, chantier);
    };
    $scope.gui = {
        selectedBatiment : undefined,
        selectedColon : undefined,
        selectedMission : undefined,
        selectedSubMission : undefined
    };

    $scope.validerMission = function() {
        $scope.gui.selectedColon.mission = { type : $scope.gui.selectedMission, sousType : $scope.gui.selectedSubMission };
    };
});

