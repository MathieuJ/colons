export abstract class Module {
    name: string;
    type: string;
}

export class Culture extends Module {
    name = "Culture";
    type = "c";
}

export class Elevage extends Module {
    name = "Elevage";
    type = "e";
}

export class Mine extends Module {
    name = "Mine";
    type = "m";
}

export class Peche extends Module {
    name = "Peche";
    type = "p";
}

export class Partie {
    culture: Culture;
    elevage: Elevage;
    mine: Mine;
    peche: Peche;

    constructor(
    culture: boolean = false,
    elevage: boolean = false,
    mine: boolean = false,
    peche: boolean = false) {
        if (culture) {
            this.culture = new Culture();
        }
        if (elevage) {
            this.elevage = new Elevage();
        }
        if (mine) {
            this.mine = new Mine();
        }
        if (peche) {
            this.peche = new Peche();
        }

    }
}