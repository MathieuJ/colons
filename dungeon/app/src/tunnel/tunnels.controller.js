(function () {


    var Cell = function (x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.numile = -1;
    };
    Cell.prototype = {};

    function Joueur() {
        var _Joueur = function (nom) {
            this.nom = nom;
            this.competences = [];
            this.starsParTour = 2;
            this.villes = [];
        };
        _Joueur.prototype = {};
        return _Joueur;
    }

    function Unite() {
        var _Unite = function (cell, joueur, proto) {
            this.cell = cell;
            this.joueur = joueur;
            this.proto = proto;
            this.pv = proto.pv;
            this.veteran = false;
            this.nbkills = 0;
        };
        _Unite.prototype = {};
        return _Unite;
    }

    function Carte() {
        var _Carte = function (taille) {
            this.taille = taille;
            this.cells = [];
            this.cells2 = [];
            var j = new Joueur("toto");
            console.log(j);

            for (var i = 0; i < 32 * 32; i++) {
                this.cells2.push(new Cell(i % taille, Math.floor(i / taille), 'eau'));
            }
            console.log(this.cells2);
            var cells2 = this.cells2;
            var getCell = function (x, y) {
                return cells2[(x + taille) % taille + ((y + taille) % taille) * taille];
            }
            var iles = [];
            var departs = [];
            departs.push(getCell(getRandomInt(-2, 2), getRandomInt(-2, 2)));
            departs.push(getCell(8 + getRandomInt(-2, 2), 8 + getRandomInt(-2, 2)));
            departs.push(getCell(16 + getRandomInt(-2, 2), getRandomInt(-2, 2)));
            departs.push(getCell(24 + getRandomInt(-2, 2), 8 + getRandomInt(-2, 2)));
            departs.push(getCell(getRandomInt(-2, 2), 16 + getRandomInt(-2, 2)));
            departs.push(getCell(8 + getRandomInt(-2, 2), 24 + getRandomInt(-2, 2)));
            departs.push(getCell(16 + getRandomInt(-2, 2), 16 + getRandomInt(-2, 2)));
            departs.push(getCell(24 + getRandomInt(-2, 2), 24 + getRandomInt(-2, 2)));
            angular.forEach(departs, function (graine) {
                graine.type = 'ville';
                graine.numile = iles.length;
                getCell(graine.x - 1, graine.y).numile = graine.numile;
                getCell(graine.x + 1, graine.y).numile = graine.numile;
                getCell(graine.x, graine.y - 1).numile = graine.numile;
                getCell(graine.x, graine.y + 1).numile = graine.numile;
                iles.push([graine]);
            });
            console.log(departs);
            var nbCasesTerre = iles.length;
            while (nbCasesTerre < 400) {
                // on choisit une ile au hasard.
                var ile = iles[getRandomInt(0, iles.length - 1)];
                // on choisit une case au hasard de l'ile
                var cell = ile[getRandomInt(0, ile.length - 1)];
                // on tente de pousser la terre n'imp :
                var nouvCell;
                switch (getRandomInt(0, 3)) {
                    case 0 :
                        nouvCell = getCell(cell.x - 1, cell.y);
                        break;
                    case 1 :
                        nouvCell = getCell(cell.x + 1, cell.y);
                        break;
                    case 2 :
                        nouvCell = getCell(cell.x, cell.y - 1);
                        break;
                    case 3 :
                        nouvCell = getCell(cell.x, cell.y + 1);
                        break;
                }
                if (nouvCell.type === 'eau' && (nouvCell.numile === cell.numile)) {
                    nouvCell.type = 'terre';
                    ile.push(nouvCell);
                    nbCasesTerre++;
                    if (getCell(nouvCell.x - 1, nouvCell.y).numile === -1) {
                        getCell(nouvCell.x - 1, nouvCell.y).numile = cell.numile;
                    }
                    if (getCell(nouvCell.x - 1, nouvCell.y - 1).numile === -1) {
                        getCell(nouvCell.x - 1, nouvCell.y - 1).numile = cell.numile;
                    }
                    if (getCell(nouvCell.x, nouvCell.y - 1).numile === -1) {
                        getCell(nouvCell.x, nouvCell.y - 1).numile = cell.numile;
                    }
                    if (getCell(nouvCell.x - 1, nouvCell.y + 1).numile === -1) {
                        getCell(nouvCell.x - 1, nouvCell.y + 1).numile = cell.numile;
                    }
                    if (getCell(nouvCell.x - 2, nouvCell.y).numile === -1) {
                        getCell(nouvCell.x - 2, nouvCell.y).numile = cell.numile;
                    }
                    if (getCell(nouvCell.x + 1, nouvCell.y).numile === -1) {
                        getCell(nouvCell.x + 1, nouvCell.y).numile = cell.numile;
                    }
                    if (getCell(nouvCell.x + 1, nouvCell.y - 1).numile === -1) {
                        getCell(nouvCell.x + 1, nouvCell.y - 1).numile = cell.numile;
                    }
                    if (getCell(nouvCell.x + 1, nouvCell.y + 1).numile === -1) {
                        getCell(nouvCell.x + 1, nouvCell.y + 1).numile = cell.numile;
                    }
                    if (getCell(nouvCell.x + 2, nouvCell.y).numile === -1) {
                        getCell(nouvCell.x + 2, nouvCell.y).numile = cell.numile;
                    }
                    if (getCell(nouvCell.x, nouvCell.y - 2).numile === -1) {
                        getCell(nouvCell.x, nouvCell.y - 2).numile = cell.numile;
                    }
                    if (getCell(nouvCell.x, nouvCell.y + 1).numile === -1) {
                        getCell(nouvCell.x, nouvCell.y + 1).numile = cell.numile;
                    }
                    if (getCell(nouvCell.x, nouvCell.y + 2).numile === -1) {
                        getCell(nouvCell.x, nouvCell.y + 2).numile = cell.numile;
                    }
                }
            }

        };


        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max + 1 - min)) + min;
        }

        _Carte.prototype = {
            get: function (x, y) {
                if (x >= 0 && y >= 0 && x < this.taille && y < this.taille) {
                    return this.cells[y][x];
                }
                return null;
            },
            setType: function (x, y, type) {
                if (this.get(x, y)) {
                    this.get(x, y).type = type;
                }
            },
            setJoueur: function (x, y, joueur) {
                if (this.get(x, y)) {
                    this.get(x, y).joueur = joueur;
                }
            },
            init: function () {
                var cell;
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
                    var x = getRandomInt(0, this.taille);
                    y = getRandomInt(0, this.taille);
                    for (var i = 0; i < this.taille; i++) {
                        cell = this.get(x, y);
                        if (cell) {
                            cell.type = "eau";
                            switch (getRandomInt(0, 3)) {
                                case 0:
                                    if (x < this.taille - 1) {
                                        x += 1;
                                    }
                                    break;
                                case 1:
                                    if (x > 0) {
                                        x -= 1;
                                    }
                                    break;
                                case 2:
                                    if (y < this.taille - 1) {
                                        y += 1;
                                    }
                                    break;
                                case 3:
                                    if (y > 0) {
                                        y -= 1;
                                    }
                                    break;
                            }
                        }
                    }
                }
                for (var i = 0; i < this.taille * 4; i++) {
                    cell = this.get(getRandomInt(0, this.taille - 1), getRandomInt(0, this.taille - 1));
                    if (cell.type === 'terre') {
                        cell.type = 'montagne';
                    }
                }
                for (var i = 0; i < this.taille * 4; i++) {
                    cell = this.get(getRandomInt(0, this.taille - 1), getRandomInt(0, this.taille - 1));
                    if (cell.type === 'terre') {
                        cell.type = 'foret';
                    }
                }
            },
            getStartingCell: function () {
                var cell = null;
                while (true) {
                    var x = getRandomInt(1, this.taille - 1), y = getRandomInt(1, this.taille - 1);
                    cell = this.get(x, y);
                    console.log("test ", cell);
                    if (cell.type === 'terre' && !cell.joueur) {
                        console.log("cell start ", cell);
                        return cell;
                    }

                }
            }
        };
        return _Carte;
    }

    function Partie(Carte) {
        var _Partie = function (createur, taille) {
            this.demarree = false;
            this.joueurs = [];
            this.unites = [];
            this.addJoueur(createur);
            this.taille = taille;
            this.actions = {
                'cv': {'nom': 'Construit ville', id: 'cv'},
                'cc': {'nom': 'Cultive champ', id: 'cc'},
                'mm': {'nom': 'Mine montagne', id: 'mm', desc: '+2 metal/tour'},
                'af': {'nom': 'Abat foret', id: 'af', desc: 'Rase tout. +10 bois'},
                'gf': {'nom': 'Construit hutte', id: 'gf', desc: 'cree une hutte de forestier. +2 bois/tour'}
            };
            this.competences = [
                {'id': 0, req: null, nom: 'chasse', niveau: 1},
                {'id': 1, req: null, nom: 'peche', niveau: 1},
                {'id': 2, req: null, nom: 'organisation', niveau: 1},
                {'id': 3, req: null, nom: 'equitation', niveau: 1},
                {'id': 4, req: null, nom: 'grimpe', niveau: 1},
                {'id': 5, req: 0, nom: 'archerie', niveau: 2},
                {'id': 6, req: 0, nom: 'foret', niveau: 2},
                {'id': 7, req: 1, nom: 'navigation', niveau: 2},
                {'id': 8, req: 1, nom: 'temple de l\'eau', niveau: 2},
                {'id': 9, req: 2, nom: 'agriculture', niveau: 2},
                {'id': 10, req: 2, nom: 'boucliers', niveau: 2},
                {'id': 11, req: 3, nom: 'routes', niveau: 2},
                {'id': 12, req: 3, nom: 'Temple des plaines', niveau: 2},
                {'id': 13, req: 4, nom: 'temple montagne', niveau: 2},
                {'id': 14, req: 4, nom: 'minage', niveau: 2}
            ];
            this.unitesDispos = {
                's': {nom: 'soldat', pv: '10', range: '1', atk: '2', def: '2', mvmt: 1},
                'c': {nom: 'cavalier', pv: '10', range: '1', atk: '2', def: '1', mvmt: 3},
                'a': {nom: 'archer', pv: '10', range: '3', atk: '2', def: '1', mvmt: 2},
                'b': {nom: 'boucliers', pv: '10', range: '1', atk: '1', def: '3', mvmt: 1}
            };
        };

        _Partie.prototype = {
            addJoueur: function (joueur) {
                joueur.id = this.joueurs.length;
                this.joueurs.push(joueur);
            },
            addUnite: function (cell, type, joueurid) {
                this.unites.push(new Unite(cell, joueurid, this.unitesDispos[type]));
            },
            demarre: function () {
                if (this.demarree) {
                    return;
                }
                this.demarree = true;
                this.carte = new Carte(this.taille);
                this.carte.init();
                for (var i = 0; i < this.joueurs.length; i++) {
                    var cellstart = this.carte.getStartingCell();
                    this.initJoueur(cellstart, this.joueurs[i]);
                    this.addUnite(cellstart, 1, 'c');
                }
                /*var c1 = ;
                 this.initJoueur(c1, this.joueurs[0]);
                 this.addUnite(c1, 1, 'c');
                 var c2 = this.carte.getStartingCell();
                 this.initJoueur(c2, this.joueurs[1]);
                 this.addUnite(c2, 2, 's');
                 var c3 = this.carte.getStartingCell();
                 this.initJoueur(c3, this.joueurs[2]);*/
            },
            getActions: function () {
                return this.actions;
            },
            initJoueur: function (cell, joueur) {
                joueur.villes.push(cell);
                joueur.starsParTour += 1;
                cell.joueur = joueur;
                cell.type = 'ville';
                cell.lvl = 1;
                this.carte.setJoueur(cell.x - 1, cell.y - 1, joueur);
                this.carte.setJoueur(cell.x - 1, cell.y, joueur);
                this.carte.setJoueur(cell.x - 1, cell.y + 1, joueur);
                this.carte.setJoueur(cell.x, cell.y + 1, joueur);
                this.carte.setJoueur(cell.x + 1, cell.y + 1, joueur);
                this.carte.setJoueur(cell.x + 1, cell.y, joueur);
                this.carte.setJoueur(cell.x + 1, cell.y - 1, joueur);
                this.carte.setJoueur(cell.x, cell.y - 1, joueur);
            },
            appliqueAction: function (action, selectedCell) {
                if (action.id === 'bv') {
                    this.carte.get(selectedCell.x, selectedCell.y).type = "ville";
                } else if (action.id === 'cc') {
                    this.carte.get(selectedCell.x, selectedCell.y).type = "champ";

                } else if (action.id === 'mm') {
                    this.carte.get(selectedCell.x, selectedCell.y).type = "mine";
                } else if (action.id === 'af') {
                    this.carte.get(selectedCell.x, selectedCell.y).type = "terre";
                }
            },
            finitTour: function () {

            }
        };
        return _Partie;
    }

    function TunnelsController($timeout, Carte, Partie, Joueur) {
        var vm = this;

        vm.partie = new Partie(new Joueur('aaaa'), 32);
        vm.partie.addJoueur(new Joueur('bbbb'));
        vm.partie.addJoueur(new Joueur('cccc'));
        vm.partie.addJoueur(new Joueur('dddd'));
        vm.partie.demarre();
        console.log(vm.partie);
        vm.select = function (x, y) {
            console.log("select", x, y);
            vm.selectedCell = vm.partie.carte.get(x, y);
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
                }
            }
        };
        vm.action = function (action) {
            vm.partie.appliqueAction(action, vm.selectedCell);
        };
    }

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
})();
