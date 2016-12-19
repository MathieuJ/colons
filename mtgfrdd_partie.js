var Partie = function() {
    this.protoMissions = {
        "Rien": new PMission("rien glander", "ou aller sur internet"),
        "Reco" : new PMission("récolter", "Récolte ciblée ou au hasard"),
        "Expl" : new PMission("explorer", "Donne des informations sur les zones"),
        "Chan" : new PMission("travailler sur un chantier", "Travailler sur la contruction d'un bâtiment"),
        "Trav" : new PMission("travailler dans un bâtiment", "Travailler dans un bâtiment")
    };
    this.protoBatiments = {
        "ZD": new PBatiment("zone de départ", "Cell de débarquement/embarquement", 0, new Cout(""), 0),
        "SC": new PBatiment("scierie en bois", "Cree du bois", 10, new Cout("BBBBB"), 20),
        "SP": new PBatiment("scierie en pierre", "Cree du bois", 20, new Cout("PPP"), 20),
        "CA": new PBatiment("carrière", "Cree du bois", 20, new Cout("PPP"), 3),
        "TP": new PBatiment("taille de pierre", "Cree du bois", 20, new Cout("BBBFFF"), 20),
        "MI": new PBatiment("mine", "Extrait des mineraux", 20, new Cout("BBB"), 3),
        "CB": new PBatiment("cabane", "Pour dormir", 10, new Cout("BBB"), 5),
        "MA": new PBatiment("maison", "Pour dormir", 20, new Cout("BBBBBPPPP"), 10)
    };
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
Partie.prototype.getChantiersPossibles = function(cell) {
    if (cell && cell.explore && !cell.chantier && !cell.batiment) {
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
    var self = this;
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
                case "Tout" :
                    resultat.push(colon.nom + " récolte 1 bois 1 argile 1 pierre");
                    self.reserve.ajout("BPA");
                break;
                case "Bois" :
                    resultat.push(colon.nom + " recolte 3 bois;");
                    self.reserve.ajout("BB");
                    break;
                case "Bois" :
                    resultat.push(colon.nom + " recolte 3 pierre;");
                    self.reserve.ajout("PP");
                break;
                case "Argi" :
                    resultat.push(colon.nom + " recolte 3 argile;");
                    self.reserve.ajout("AA");
                break;
            }
        break;
        case "Ch" : resultat.push(colon.nom + " chasse les lapins;");
            self.reserve.ajout("ffff");
            break;
        case "Trav" :
            var batiment = self.map[colon.mission.sousType.x, colon.mission.sousType.y].batiment;
            resultat.push(colon.nom + " travaille sur batiment " + batiment);
        case "Chan" :
            var chantier = self.map[colon.mission.sousType.x, colon.mission.sousType.y].chantier;
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
    _.map(this.protoBatiments, function(pb, key) {
        if (self.reserve.contient(pb.cout)) {
            self.chantiersPossibles.push(pb);
        } else {
            self.chantiersImpossibles.push(pb);
        }
    });
    this.initMap();
};
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
Partie.prototype.getCell= function(c, r){
    return this.map[(r + this.taille) % this.taille][(c + this.taille) % this.taille];
}

Partie.prototype.initMap = function() {
    this.taille = 15;
    this.map = [];
    var self = this;
    for (var i = 0; i < this.taille; i++) {
        var ligne = [];
        this.map.push(ligne);
        for (var j = 0; j < this.taille; j++) {
            var c = { i : i, j: j} ; //new Cell(i, j);
            ligne.push(c);
            var n = getRandomInt(0, 100);
            if (n < 45) {
                c.type = 'eau';
//            } else if (n < 65) {
//                c.type = 'foret';
//            } else if (n < 80) {
//                c.type = 'montagne';
            } else {
                c.type = 'terre';
            }
        }
    }
    // bois sur la moitié de la map
/*    for (var i = 0; i < this.taille * this.taille / 2; i++) {
        this.getCell(getRandomInt(0, this.taille), getRandomInt(0, this.taille)).add("AAABBBB");
    }
    // baies sur le tiers
    for (var i = 0; i < this.taille * this.taille / 3; i++) {
        this.getCell(getRandomInt(0, this.taille - 1), getRandomInt(0, this.taille - 1)).add("ffff");
    }
    // pierres sur le quart
    for (var i = 0; i < this.taille * this.taille / 2; i++) {
        this.getCell(getRandomInt(0, this.taille - 1), getRandomInt(0, this.taille - 1)).add("PPPPP");
    }*/
    var depart = this.getCell(8, 8);
    depart.type = 'terre';
    depart.batiment= { proto : "ZD" };
    _.each([-1, 0, 1], function(i) {
        _.each([-1, 0, 1], function(j) {
            self.getCell(8 + i,8 + j).explore = true;
        });
    });
    for (var r = 0; r < self.taille; r++) {
        for (var c = 0; c < self.taille; c++) {
            var cell = self.map[r][c];
            var cellC = self.getCell(c, r).type === 'terre' ? 1 : 0;
            var cellNO = self.getCell(c-1, r-1).type === 'terre' ? 1 : 0;
            var cellN = self.getCell(c, r-1).type === 'terre' ? 1 : 0;
            var cellO = self.getCell(c-1, r).type === 'terre' ? 1 : 0;
            cell.textCoord = [
                getTileCoord(cellNO, cellN, cellC, cellO),
                getTileCoord(cellN, cellN, cellC, cellC),
                getTileCoord(cellO, cellC, cellC, cellO),
                getTileCoord(cellC, cellC, cellC, cellC)
            ];
        }
    }
    var canvas = document.getElementById('mycanvas')[0];
    this.ctx = canvas.getContext('2d');
    this.tileSprite = 16;
    this.tileSize = 16;       // The size of a tile (32×32)
    this.tilesetImage = new Image();
    this.tilesetImage.src = 'tileset_divers.png';
    this.cellWidth = 4;
    this.cellHeight = 3;
    this.tilesetImage.onload = this.dessineMap;
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

Partie.prototype.commencerChantier = function(cell, protobatiment) {
    var self = this;
    self.reserve.soustrait(protobatiment.cout);
    var chantier = { x : cell.x, y : cell.y, proto : protobatiment, reste : protobatiment.tempsConstruction };
    cell.chantier = chantier;
    self.chantiers.push( chantier );
};

function getTileCoord(a1, a2, a3, a4) {
    var baseX = 22;
    var baseY = 28;
    var nb = a1 + a2*2 + a3 * 4 + a4 * 8;
    switch(nb) {
        case 0 : return [baseX + 1, baseY + 1];
        case 1 : return [baseX + 4, baseY + 1];
        case 2 : return [baseX + 3, baseY + 1];
        case 3 : return [baseX + 1, baseY + 0];
        case 4 : return [baseX + 3, baseY + 0];
        case 5 : return [baseX + 3, baseY + 2];
        case 6 : return [baseX + 2, baseY + 1];
        case 7 : return [baseX + 2, baseY + 0];
        case 8 : return [baseX + 4, baseY + 0];
        case 9 : return [baseX + 0, baseY + 1];
        case 10 : return [baseX + 4, baseY + 2];
        case 11 : return [baseX + 0, baseY + 0];
        case 12 : return [baseX + 1, baseY + 2];
        case 13 : return [baseX + 0, baseY + 2];
        case 14 : return [baseX + 2, baseY + 2];
        case 15 : return [16, 29];
    }
}


Partie.prototype.drawTile = function(u, v, x, y) {
    this.ctx.drawImage(this.tilesetImage,
        (u * this.tileSprite), (v * this.tileSprite),
        this.tileSprite, this.tileSprite,
        this.tileSize * x,
        this.tileSize * y,
        this.tileSize, this.tileSize);
}

Partie.prototype.dessineMap = function() {
    var self = this;
    console.log("dessine map", self.taille);
       for (var r = 0; r < self.taille; r++) {
          for (var c = 0; c < self.taille; c++) {
            console.log("boucle sur ", c, r);
                 var cell = self.map[ r ][ c ];

             var tileCol = 23; //(tile % imageNumTiles) | 0;
             var tileRow = 32 ; //(tile / imageNumTiles) | 0; // Bitwise OR operation
             // centre de la cellule
             switch (cell.type) {
                case 'montagne': tileCol = 23 ; tileRow = 35; break;
                case 'eau' : tilecol = 23; tileRow = 29; break;
                case 'foret' : tileCol = 20; tileRow = 29; break;
                case 'terre' : tileCol = 16; tileRow = 41; break;
                default : tileCol = 23; tileRow = 32; break;
             }

            // tuile NO
            self.drawTile(16, 29,
                 c * (self.cellWidth + 1),
                 r * (self.cellHeight + 1));
            self.drawTile(cell.textCoord[0][0], cell.textCoord[0][1],
                c * (self.cellWidth + 1),
                r * (self.cellHeight + 1));
            // frontiere N
            for (var i = 0; i < self.cellWidth; i++) {
                self.drawTile(16, 29,
                     c * (self.cellWidth + 1) + 1 + i,
                     r * (self.cellHeight + 1));
                self.drawTile(cell.textCoord[1][0], cell.textCoord[1][1],
                    c * (self.cellWidth + 1) + 1 + i,
                    r * (self.cellHeight + 1));
            }
            // frontiere 0
            for (var j = 0; j < self.cellHeight; j++) {
            self.drawTile(16, 29,
                c * (self.cellWidth + 1),
                r * (self.cellHeight + 1) + 1 + j);
            self.drawTile(cell.textCoord[2][0], cell.textCoord[2][1],
                c * (self.cellWidth + 1),
                r * (self.cellHeight + 1) + 1 + j);
            }

            for (var i = 0; i < self.cellWidth; i++) {
                for (var j = 0; j < self.cellHeight; j++) {
                    self.drawTile(16, 29,
                        c * (self.cellWidth + 1) + 1 + i,
                        r * (self.cellHeight + 1) + 1 + j);
                    self.drawTile(cell.textCoord[3][0], cell.textCoord[3][1],
                         c * (self.cellWidth + 1) + 1 + i,
                         r * (self.cellHeight + 1) + 1 + j);
                }
            }
            if (cell.batiment && cell.batiment.proto === 'ZD') {
                self.drawTile(54, 0, c * (self.cellWidth + 1) + 1, r * (self.cellHeight + 1) + 1);
                self.drawTile(55, 0, c * (self.cellWidth + 1) + 2, r * (self.cellHeight + 1) + 1);
                self.drawTile(56, 0, c * (self.cellWidth + 1) + 3, r * (self.cellHeight + 1) + 1);
                self.drawTile(54, 1, c * (self.cellWidth + 1) + 1, r * (self.cellHeight + 1) + 2);
                self.drawTile(55, 1, c * (self.cellWidth + 1) + 2, r * (self.cellHeight + 1) + 2);
                self.drawTile(56, 1, c * (self.cellWidth + 1) + 3, r * (self.cellHeight + 1) + 2);
                self.drawTile(54, 2, c * (self.cellWidth + 1) + 1, r * (self.cellHeight + 1) + 3);
                self.drawTile(55, 2, c * (self.cellWidth + 1) + 2, r * (self.cellHeight + 1) + 3);
                self.drawTile(56, 2, c * (self.cellWidth + 1) + 3, r * (self.cellHeight + 1) + 3);
            }
          }
    }
};
