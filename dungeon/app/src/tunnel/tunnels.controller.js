(function() {

    angular
        .module('tunnels')
        .controller('TunnelsController', [
            '$timeout',
            TunnelsController
        ]);

    /**
     * Main Controller for the Angular Material Starter App
     * @param $scope
     * @param $mdSidenav
     * @param avatarsService
     * @constructor
     */
    function TunnelsController($timeout) {
        var vm = this;

        vm.users = [];

        //PartieService.init();

        vm.map = [];
        var taille = 32;
        for (var y = 0; y < taille; y++) {
            var ligne = [];
            for (var x = 0; x < taille; x++) {
                ligne.push({
                    x: x,
                    y: y,
                    type: "terre"
                });
            }
            vm.map.push(ligne);
        }

        function get(x, y) {
            if (x >= 0 && y >= 0 && x < taille && y < taille) {
                return vm.map[y][x];
            }
            return null;
        }
        
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }

        (function() {
            
            for (var fois = 0; fois < 8; fois++) {
                var x = getRandomInt(0, taille+1); y= getRandomInt(0, taille+1);
                for (var i = 0; i < (taille); i++) {
                    var cell = get(x,y);
                    if (cell) {
                        cell.type = "eau";
                        switch (getRandomInt(0, 4)) {
                            case 0:
                                if (x < taille - 1) x += 1;
                                break;
                            case 1:
                                if (x > 0) x -= 1;
                                break;
                            case 2:
                                if (y < taille - 1) y += 1;
                                break;
                            case 3:
                                if (y > 0) y -= 1;
                                break;
                        }
                    }
                }
            }
            for (var i = 0; i < taille * 4; i++) {
                var cell = get(getRandomInt(0, taille), getRandomInt(0, taille));
                if (cell.type === 'terre') {
                    cell.type = 'montagne';
                }
            }
            for (var i = 0; i < taille * 4; i++) {
                var cell = get(getRandomInt(0, taille), getRandomInt(0, taille));
                if (cell.type === 'terre') {
                    cell.type = 'foret';
                }
            }
        })();
        
        vm.selectedCell;
        vm.selectedUnite;
        vm.select = function(x, y) {
            console.log("select", x, y);
            var macell = get(x, y);
            vm.selectedCell = macell;
            if (vm.selectedUnite) {
                vm.selectedUnite = false;
            } else {
                var unite = null; //getUnite(x, y);
                if (unite) {
                    vm.selectedUnite = unite;
                    //vm.destinations=calculeChemins();
                }
            }
        }
        
        get(10, 10).joueur = 1;
        get(11, 10).joueur = 1;
        get(12, 10).joueur = 1;
        
        get(10, 11).joueur = 1;
        get(11, 11).joueur = 1;
        get(12, 11).joueur = 1;
        get(10, 12).joueur = 1;
        get(11, 12).joueur = 1;
        get(12, 12).joueur = 1;
        get(13, 10).joueur = 2;
        get(13, 11).joueur = 2;
        get(13, 12).joueur = 2;
    }
})();
