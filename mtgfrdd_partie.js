var Partie = function() {
    this.protoMissions = {
        "Rien": new PMission("rien glander", "ou aller sur internet"),
        "Reco" : new PMission("récolter", "Récolte ciblée ou au hasard"),
        "Expl" : new PMission("explorer", "Donne des informations sur les zones"),
        "Chan" : new PMission("travailler sur un chantier", "Travailler sur la contruction d'un bâtiment"),
        "Trav" : new PMission("travailler dans un bâtiment", "Travailler dans un bâtiment")
    };
    this.protoBatiments = [
        new PBatiment("zone de départ", "Zone de débarquement/embarquement", 0, new Cout(""), 0),
        new PBatiment("scierie en bois", "Cree du bois", 10, new Cout("BBBBB"), 20),
        new PBatiment("scierie en pierre", "Cree du bois", 20, new Cout("PPP"), 20),
        new PBatiment("carrière", "Cree du bois", 20, new Cout("PPP"), 3),
        new PBatiment("taille de pierre", "Cree du bois", 20, new Cout("BBBFFF"), 20),
        new PBatiment("mine", "Extrait des mineraux", 20, new Cout("BBB"), 3),
        new PBatiment("cabane", "Pour dormir", 10, new Cout("BBB"), 5),
        new PBatiment("maison", "Pour dormir", 20, new Cout("BBBBBPPPP"), 10)
    ];
    this.colonsStock = [
        new Colon("Ranche", 1365, 20, 20, 1, 1, 1, 1, ["rancunier"]),
        new Colon("Xuelynom", 1375, 20, 20, 1, 1, 1, 1, ["procrastinateur"]),
        new Colon("Kobold", 1370, 20, 20, 2, 1, 1, 1, ["économe"]),
        new Colon("Imagination", 1380, 20, 20, 1, 1, 1, 1, ["sociable"]),
        new Colon("Mattevski", 1375, 20, 20, 1, 1, 1, 1, ["sociable"]),
        new Colon("Smc", 1372, 20, 20, 1, 1, 1, 1, ["ingénieux"]),
        new Colon("Tigrou", 1374, 20, 20, 1, 1, 1, 1, []),
        new Colon("Etienne", 1374, 20, 20, 1, 1, 1, 1, ["syndicaliste"]),
        new Colon("Guile", 1372, 20, 20, 1, 1, 1, 1, ["cuisinier"]),
        new Colon("LightingBolt", 1388, 20, 20, 1, 1, 1, 1, ["colérique"]),
        new Colon("Nokiou", 1362, 20, 20, 1, 1, 1, 1, ["conteur"]),
        new Colon("Merk", 1372, 20, 20, 1, 1, 1, 1, ["colérique", "syndicaliste"]),
        new Colon("Arteis", 1372, 20, 20, 1, 1, 1, 1, ["joueur"]),
        new Colon("Wilfried", 1372, 20, 20, 1, 1, 1, 1, ["joueur"]),
        new Colon("Rikku", 1372, 20, 20, 1, 1, 1, 1, ["acteur"]),
        new Colon("Arteis", 1372, 20, 20, 1, 1, 1, 1, ["acteur", "sociable"]),
        new Colon("Mr Grand", 1372, 20, 20, 1, 1, 1, 1, ["conteur"]),
        new Colon("Kevind", 1372, 20, 20, 1, 1, 1, 1, ["psychorigide"]),
        new Colon("Ngold", 1372, 20, 20, 1, 1, 1, 1, ["ingénieux", "économe"]),
        new Colon("Snoxx", 1367, 20, 20, 1, 1, 1, 1, ["dandy"])
    ];
};
Partie.prototype.getMissions = function(colon) {
    if (!colon) {
        return {};
    }
    var self = this;
    var missions = {};
    missions["Rien"] = self.protoMissions["Rien"];
    if (self.getAge(colon) >= 10) {
        missions["Reco"] = self.protoMissions["Reco"];
        missions["Expl"] = self.protoMissions["Expl"];
        if (self.chantiers.length > 0) {
            missions["Chan"] = self.protoMissions["Chan"];
        }
        if (self.batiments.length > 0) {
            missions["Trav"] = self.protoMissions["Trav"];
        }
    }
    return missions;
};
Partie.prototype.getChantiersPossibles = function(zone) {
    if (zone && zone.explore && !zone.chantier && !zone.batiment) {
        return _.rest(this.protoBatiments);
    } else {
        return [];
    }
};
Partie.prototype.getAge = function(colon) {
    return this.annee - colon.dateNaissance;
}
Partie.prototype.getSubMissions = function(colon, mission) {
    //console.log("get submission for ", colon, mission);
    var self = this;
    var submissions = {};
    if (mission === 'Reco') {
        submissions = {"Tout" : "Récolter sans préférence",
            "Bois" : "Récolter du bois",
            "Pier" : "Récolter de la pierre",
            "Nour" : "Récolter de la nourriture"
        }
    } else if (mission === 'Expl') {
        
    } else if (mission === 'Chan') {
        _.each(self.chantiers, function(chantier) {
            submissions[{x : chantier.x, y : chantier.y }] = chantier;
        });
    } else if (mission === 'Trav') {
        _.each(self.batiments, function(batiment) {
            submissions[{x : batiment.x, y : batiment.y }] = batiment;
        });
    }
    //console.log(submissions);
    return submissions;
};


Partie.prototype.handleColon = function(colon) {
    var resultat = [];
    if (colon.mort) {
        return;
    }
    if (!colon.mission) {
        colon.mission = { type : this.protoMissions['Rien'] };
    }
    colon.sante -= 3;
    console.log(colon.mission);
    switch(colon.mission.type) {
        case "Reco" :
            switch(colon.mission.sousType) {
                case "Bois" :
                    resultat.push(colon.nom + " recolte 1 bois;");
                    self.reserve.ajout("B");
                    break;
                case "Bois" :
                    resultat.push(colon.nom + " recolte 1 pierre;");
                    self.reserve.ajout("P");
                break;
                case "Argi" :
                    resultat.push(colon.nom + " recolte 1 argile;");
                    self.reserve.ajout("A");
                break;
            }
        break;
        case "Ch" : resultat.push(colon.nom + " chasse les lapins;");
            self.reserve.ajout("ffff");
            break;
        case "Trav" :
            var batiment = self.zones[colon.mission.sousType.x, colon.mission.sousType.y].batiment;
            resultat.push(colon.nom + " travaille sur batiment " + batiment);
        case "Chan" :
            var chantier = self.zones[colon.mission.sousType.x, colon.mission.sousType.y].chantier;
            resultat.push(colon.nom + " travaille sur chantier " + chantier);
        break;
        case "Rien" :
        default : 
            resultat.push(colon.nom + " se repose. +1 Santé");
            colon.sante ++;
            break;
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
    return resultat;
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
    this.initZones();
};
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
Partie.prototype.getZone = function(x, y) {
    return this.zones[y][x];
}

Partie.prototype.initZones = function() {
    this.taille = 15;
    this.zones = [];
    for (var i = 0; i < this.taille; i++) {
        var ligne = [];
        this.zones.push(ligne);
        for (var j = 0; j < this.taille; j++) {
            ligne.push(new Zone(i, j));
        }
    }
    // bois sur la moitié de la map
    for (var i = 0; i < this.taille * this.taille / 2; i++) {
        this.getZone(getRandomInt(0, this.taille), getRandomInt(0, this.taille)).add("AAABBBB");
    }
    // baies sur le tiers
    for (var i = 0; i < this.taille * this.taille / 3; i++) {
        this.getZone(getRandomInt(0, this.taille - 1), getRandomInt(0, this.taille - 1)).add("ffff");
    }
    // pierres sur le quart
    for (var i = 0; i < this.taille * this.taille / 2; i++) {
        this.getZone(getRandomInt(0, this.taille - 1), getRandomInt(0, this.taille - 1)).add("PPPPP");
    }
    var depart = this.getZone(8, 8);
    depart.explore = true;
    depart.batiment= { proto : this.protoBatiments[0] };
    this.getZone(7,8).explore = true;
    this.getZone(9,8).explore = true;
    this.getZone(8,7).explore = true;
    this.getZone(8,9).explore = true;

}
Partie.prototype.termineTour = function() {
    var self = this;
    var resultat = ["Fin du jour " + self.jour + " de l'année " + self.annee];
    _.each(self.colons, function(colon) {
        var res = self.handleColon(colon);
        console.log(res);
        resultat.push(res);
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
    return resultat;
};

Partie.prototype.commencerChantier = function(zone, protobatiment) {
    var self = this;
    self.reserve.soustrait(protobatiment.cout);
    var chantier = { x : zone.x, y : zone.y, proto : protobatiment, reste : protobatiment.tempsConstruction };
    zone.chantier = chantier;
    self.chantiers.push( chantier );
};
