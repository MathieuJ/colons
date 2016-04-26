(function() {

    angular
        .module('tunnels')
        .factory('Carte', [Carte])
        .factory('Unite', [Unite])
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
            this.competences = [];
        };
        Joueur.prototype = {
        }
        return Joueur;
    };
    function Unite(){
        var Unite = function(type) {
            this.type = type;
            this.pv = type.pv;
            this.veteran = false;
            this.nbkills = 0;
        };
        Unite.prototype = {
        }
        return Unite;
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
            setType : function(x, y, type) {
                if (this.get(x, y)) {
                    this.get(x, y).type = type;
                }
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
            },
            getStartingCell : function() {
                var cell = null;
                while(!cell) {
                    var x = getRandomInt(1, this.taille); y= getRandomInt(1, this.taille);
                    var cell = this.get(x,y);
                    if (cell.type === 'terre' && !cell.joueur) {
                        return cell;
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
            this.competences = {
                { 'id' : 0, req : null, nom : 'chasse', niveau : 1 },  
                { 'id' : 1, req : null, nom : 'peche', niveau : 1 },  
                { 'id' : 2, req : null, nom : 'organisation', niveau : 1 },  
                { 'id' : 3, req : null, nom : 'equitation', niveau : 1 },  
                { 'id' : 4, req : null, nom : 'grimpe', niveau : 1 },  
                { 'id' : 5, req : 0, nom : 'archerie', niveau : 2 },  
                { 'id' : 6, req : 0, nom : 'foret', niveau : 2 },  
                { 'id' : 7, req : 1, nom : 'navigation', niveau : 2 },  
                { 'id' : 8, req : 1, nom : 'temple de l\'eau', niveau : 2 },  
                { 'id' : 9, req : 2, nom : 'agriculture', niveau : 2 },  
                { 'id' : 10, req : 2, nom : 'boucliers', niveau : 2 },  
                { 'id' : 11, req : 3, nom : 'routes', niveau : 2 },  
                { 'id' : 12, req : 3, nom : 'Temple des plaines', niveau : 2 },
                { 'id' : 13, req : 4, nom : 'temple montagne', niveau : 2 },  
                { 'id' : 14, req : 4, nom : 'minage', niveau : 2 }
            };
            this.unitesDispos = {
                's' : { nom : 'soldat', pv : '10', dist : '1', atk : '2', def : '2', mvmt : 1 },
                'c' : { nom : 'cavalier', pv : '10', dist : '1', atk : '2', def : '1', mvmt : 3 },
                'a' : { nom : 'archer', pv : '10', dist : '3', atk : '2', def : '1', mvmt : 2 },
                'b' : { nom : 'boucliers', pv : '10', dist : '1', atk : '1', def : '3', mvmt : 1 }
            };
        };
        
        Partie.prototype = {
            addJoueur : function(joueur) {
                this.joueurs.push(joueur.userid);
            },
            addUnite : function(x, y, joueurid) {
                this.unites.
            }
            demarre : function() {
                this.demarree = true;
                this.carte = new Carte(this.taille);
                this.carte.init();   
                var c1 = this.carte.getStartingCell();
                this.initJoueur(c1, 1);
                var c2 = this.carte.getStartingCell();
                this.initJoueur(c1, 2);
                var c3 = this.carte.getStartingCell();
                this.initJoueur(c1, 3);
            },
            getActions : function() {
                return this.actions;
            },
            initJoueur : function(cell, joueurid) {
                cell.joueur = joueurid;
                this.setJoueur(x-1, y-1, joueurid);
                this.setJoueur(x-1, y, joueurid);
                this.setJoueur(x-1, y+1, joueurid);
                this.setJoueur(x, y+1, joueurid);
                this.setJoueur(x+1, y+1, joueurid);
                this.setJoueur(x+1, y, joueurid);
                this.setJoueur(x+1, y-1, joueurid);
                this.setJoueur(x, y-1, joueurid);
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
            var macell = vm.partie.carte.get(x, y);
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
