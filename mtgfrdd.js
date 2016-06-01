var Colon = function(nom, dateNaissance, sante, santeMax, str, int, cour, soc, agi) {
    this.nom = nom;
    this.dateNaissance = dateNaissance;
    this.str = str;
    this.int = int;
    this.cour = cour;
    this.soc = soc;
    this.agi = agi;
    this.sante = sante;
    this.santeMax = santeMax;
};

var PBatiment = function(nom, desc, longevite, cout, tempsConstruction) {
    this.nom = nom;
    this.desc = desc;
    this.cout = cout;
    this.longevite = longevite;
    this.tempsConstruction = tempsConstruction
};


var PMission = function(nom, desc, code) {
    this.nom = nom;
    this.desc = desc;
    this.code = code;
};


var Cout = function(valeur) {
    this.valeurs = _.countBy(valeur.split(""));
};
Cout.prototype.soustrait = function(cout) {
    var self = this;
    _.each(cout.valeurs, function(v, k) {
        self.valeurs[k] -= v;
    });
}
Cout.prototype.contient = function(cout) {
    var res = true;
    var self = this;
    _.each(cout.valeurs, function(v, k) {
        if (!self.valeurs[k] || self.valeurs[k] < v) {
            res = false;
        }
    });
    return res;
};
Cout.prototype.ajout = function(valeur) {
    var self = this;
    _.each(valeur.split(""), function(v) {
        if (self.valeurs[v]) {
            self.valeurs[v]++;
        } else {
            self.valeurs[v] = 1;
        }
    });
};

Cout.prototype.affichage = function() {
    return _.map(this.valeurs, function(val, key) {
        switch(key) {
            case "B" : return "Bois : " + val;
            case "P" : return "Pierre : " + val;
            case "A" : return "Argile : " + val;
            case "b" : return "Brique : " + val;
            case "O" : return "Or : " + val;
            case "F" : return "Fer : " + val;
            case "f" : return "Fruits : " + val;
            case "c" : return "Bois : " + val;
            case "t" : return "Tissu : " + val;

        }
    });
};

var Partie = function() {
    this.protoMissions = [
        new PMission("rien glander", "ou aller sur internet", "RG"),
        new PMission("ramasser du bois", "Récupère du bois", "RB"),
        new PMission("couper du bois", "Récupère du bois", "CB"),
        new PMission("ramasser de l'argile", "Ramasse de l'argile", "RA"),
        new PMission("ramasser des cailloux", "", "RC"),
        new PMission("creuser une mine", "Creuse une mine", "CM"),
        new PMission("travailler dans la mine", "extraire des minéraux", "TM"),
        new PMission("travailler sur un chantier", "Travailler sur la contruction d'un bâtiment", "TC"),
        new PMission("chasser", "miam", "CH"),
        new PMission("cueillette", "miam", "CU"),
        new PMission("explorer", "miam", "EX")
    ];
    this.protoBatiments = [
        new PBatiment("scierie en bois", "Cree du bois", 10, new Cout("BBBBB"), 20),
        new PBatiment("scierie en pierre", "Cree du bois", 20, new Cout("PPP"), 20),
        new PBatiment("carrière", "Cree du bois", 20, new Cout("PPP"), 3),
        new PBatiment("taille de pierre", "Cree du bois", 20, new Cout("BBBFFF"), 20),
        new PBatiment("mine", "Extrait des mineraux", 20, new Cout("BBB"), 3),
        new PBatiment("cabane", "Pour dormir", 10, new Cout("BBB"), 5),
        new PBatiment("maison", "Pour dormir", 20, new Cout("BBBBBPPPP"), 10)
    ];
    this.colonsStock = [
        new Colon("Ranche", 1370, 20, 20, 1, 1, 1, 1),
        new Colon("Xuelynom", 1370, 20, 20, 1, 1, 1, 1),
        new Colon("Kobold", 1370, 20, 20, 2, 1, 1, 1),
        new Colon("Imagination", 1370, 20, 20, 1, 1, 1, 1),
        new Colon("Mattevski", 1370, 20, 20, 1, 1, 1, 1),
        new Colon("Smc", 1370, 20, 20, 1, 1, 1, 1),
        new Colon("Snoxx", 1370, 20, 20, 1, 1, 1, 1),
        new Colon("Pamy", 1370, 20, 20, 1, 1, 1, 1)
    ];
};
Partie.prototype.demarre = function() {
    var self = this;
    this.reserve = new Cout("BBBBBFFFFBBPPPPP");
    this.annee = 1400;
    this.colons = _.shuffle(this.colonsStock).slice(0, 5);
    _.each(this.colons, function(colon) {
        colon.mission = self.protoMissions[0];
    });
    this.batiments = [];
    this.chantiers = [];
    this.jour = 1;

    this.chantiersPossibles = [];
    this.chantiersImpossibles = [];
    _.each(this.protoBatiments, function(pb) {
        if (self.reserve.contient(pb.cout)) {
            self.chantiersPossibles.push(pb);
        } else {
            self.chantiersImpossibles.push(pb);
        }
    });
};

Partie.prototype.termineTour = function() {
    var self = this;
    var resultat = ["Fin du jour " + self.jour + " de l'année " + self.annee];
    _.each(self.colons, function(colon) {
        if (colon.mort) {
            return;
        }
        colon.sante -= 3;
        switch(colon.mission.code) {
            case "RB" : resultat.push(colon.nom + " recolte 1 bois;"); self.reserve.ajout("B"); break;
            case "RP" : resultat.push(colon.nom + " recolte 1 pierre;"); self.reserve.ajout("P"); break;
            case "CH" : resultat.push(colon.nom + " recolte 1 pierre;"); self.reserve.ajout("ffff"); break;
            case "RG" : resultat.push(colon.nom + " se repose. +1 Santé"); colon.sante ++; break;
        }

        if (colon.maison) {
            resultat.push(colon.nom + " dort dans son lit; +1 Santé");
            colon.sante ++;
        } else {
            resultat.push(colon.nom + " dort à la belle étoile et est fatigué;");
        }
        if (colon.sante <= 0) {
            resultat.push(colon.nom + " meurt;");
            colon.mort = true;
        }
    });
    _.each(self.batiments, function(batiment) {
        if (!batiment.ruines) {
            batiment.durabilite--;
            if (batiment.durabilite === 0) {
                batiment.ruines = true;
            }
        }
    });

    self.chantiersPossibles = [];
    self.chantiersImpossibles = [];
    _.each(self.protoBatiments, function(pb) {
        console.log(pb, self.reserve, self.reserve.contient(pb.cout));
        if (self.reserve.contient(pb.cout)) {
            self.chantiersPossibles.push(pb);
        } else {
            self.chantiersImpossibles.push(pb);
        }
    });

    self.jour++;
    if (self.jour === 30) {
        self.jour = 1;
        self.annee++;
    }
    resultat.push("Nouveau jour : jour " + self.jour + " de l'année " + self.annee);
    $scope.resultat = resultat;
};

Partie.prototype.commencerChantier = function(protobatiment) {
    var self = this;
    self.reserve.soustrait(protobatiment.cout);
    self.chantiers.push( { proto : protobatiment, reste : protobatiment.tempsConstruction });
};

angular.module('Mtgfrdd', []).controller('MtgfrddCtrl', function($scope, $interval){
    var partie = new Partie();
    partie.demarre();

    $scope.partie = partie;

    $scope.valider = function() {
        partie.termineTour();
    };
});
