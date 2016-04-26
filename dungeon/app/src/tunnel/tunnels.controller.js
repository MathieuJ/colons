(function() {

    angular
        .module('tunnels')
        .factory('Carte', [Carte])
        .factory('Joueur', [Joueur])
        .factory('Partie', ['Carte', Partie])
      .controller('TunnelsController', [
            '$timeout',
            'Carte',
            'Partie',
            'Joueur',
            TunnelsController
        ]);
    
    function Joueur(){
        var Joueur = function(nom, userid) {
            this.nom = nom;
            this.userid = userid;
        };
        Joueur.prototype = {
        }
        return Joueur;
    };
    function Carte(){
        var Carte = function(taille) {
            this.taille = taille;
            this.cells = [];
        };
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
            
        Carte.prototype = {
            get : function(x, y) {
                if (x >= 0 && y >= 0 && x < this.taille && y < this.taille) {
                    return this.cells[y][x];
                }
                return null;
            },
            init : function () {
                for (var y = 0; y < this.taille; y++) {
                    var ligne = [];
                    for (var x = 0; x < this.taille; x++) {
                        ligne.push({
                            x: x,
                            y: y,
                            type: "terre"
                        });
                    }
                    this.cells.push(ligne);
                }
                for (var fois = 0; fois < 8; fois++) {
                    var x = getRandomInt(0, this.taille+1); y= getRandomInt(0, this.taille+1);
                    for (var i = 0; i < this.taille; i++) {
                        var cell = this.get(x,y);
                        if (cell) {
                            cell.type = "eau";
                            switch (getRandomInt(0, 4)) {
                                case 0:
                                    if (x < this.taille - 1) x += 1;
                                    break;
                                case 1:
                                    if (x > 0) x -= 1;
                                    break;
                                case 2:
                                    if (y < this.taille - 1) y += 1;
                                    break;
                                case 3:
                                    if (y > 0) y -= 1;
                                    break;
                            }
                        }
                    }
                }
                for (var i = 0; i < this.taille * 4; i++) {
                    var cell = this.get(getRandomInt(0, this.taille), getRandomInt(0, this.taille));
                    if (cell.type === 'terre') {
                        cell.type = 'montagne';
                    }
                }
                for (var i = 0; i < this.taille * 4; i++) {
                    var cell = this.get(getRandomInt(0, this.taille), getRandomInt(0, this.taille));
                    if (cell.type === 'terre') {
                        cell.type = 'foret';
                    }
                }
            }
        }
        return Carte;
    }

    function Partie(Carte){
        var Partie = function(createur, taille) {
            this.createurid = createur.userid;
            this.demarree = false;
            this.joueurs = [];
            this.joueurs.push(createur.userid);
            this.taille = taille;
            this.actions = {
                'cv' : { 'nom' : 'Construit ville', id:'cv' },
                'cc' : { 'nom' : 'Cultive champ', id:'cc' },
                'mm' : { 'nom' : 'Mine montagne', id:'mm', desc: '+2 metal/tour' },
                'af' : { 'nom' : 'Abat foret', id:'af', desc : 'Rase tout. +10 bois' },
                'gf' : { 'nom' : 'Construit hutte', id:'gf', desc : 'cree une hutte de forestier. +2 bois/tour'}
            };
        };
        
        Partie.prototype = {
            addJoueur : function(joueur) {
                this.joueurs.push(joueur.userid);
            },
            demarre : function() {
                this.demarree = true;
                this.carte = new Carte(this.taille);
                this.carte.init();    
            },
            getActions : function() {
                return this.actions;
            },
            appliqueAction : function(action, selectedCell) {
                if (action.id === 'bv') {
                    this.carte.get(selectedCell.x, selectedCell.y).type = "ville";
                } else if (action.id === 'cc') {
                    this.carte.get(selectedCell.x, selectedCell.y).type = "champ";
                } else if (action.id === 'mm') {
                    this.carte.get(selectedCell.x, selectedCell.y).type = "mine";
                } else if (action.id === 'af') {
                    this.carte.get(selectedCell.x, selectedCell.y).type = "terre";
                }
            }
        };
        return Partie;
    }
  
    function TunnelsController($timeout, Carte, Partie, Joueur) {
        var vm = this;

        vm.joueurs = [new Joueur('aaaa', 1), new Joueur('bbbb', 2)];

        vm.partie = new Partie(vm.joueurs[0], 32);
        console.log(vm.partie.createurid);
        console.log(vm.partie);
        vm.partie.addJoueur(vm.joueurs[1]);
        console.log(vm.partie.joueurs);
        vm.partie.demarre();
        vm.selectedCell;
        vm.selectedUnite;
        vm.select = function(x, y) {
            console.log("select", x, y);
            var macell = vm.partie.get(x, y);
            vm.selectedCell = macell;
            if (vm.selectedUnite) {
                vm.selectedUnite = false;
            } else {
                var unite = null; //getUnite(x, y);
                if (unite) {
                    vm.selectedUnite = unite;
                    //vm.destinations=calculeChemins();
                }
                vm.actions = [];
                if (vm.selectedCell.type === 'terre') {
                    vm.actions.push(vm.partie.getActions().cv);
                    vm.actions.push(vm.partie.getActions().cc);
                } else if (vm.selectedCell.type === 'montagne') {
                    vm.actions.push(vm.partie.getActions().mm);
                } else if (vm.selectedCell.type === 'foret') {
                    vm.actions.push(vm.partie.getActions().af);
                    vm.actions.push(vm.partie.getActions().gf);
                };
            }
        }
        vm.action = function(action) {
            vm.partie.appliqueAction(action, vm.selectedCell);
        }
    }
})();
