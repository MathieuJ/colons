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
    this.tempsConstruction = tempsConstruction;
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

var Zone = function(x, y) {
    this.x = x;
    this.y = y;
    this.cout = new Cout("");
    this.coutDecouvert = new Cout("");
};
Zone.prototype.add = function(v) {
    this.cout.ajout(v);
}
