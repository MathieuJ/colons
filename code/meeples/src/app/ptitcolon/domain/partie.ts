export function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

export class Cout {
    static from(s: string): Cout {
        const elements = {};
        s.split('').forEach(c => {
            if (elements[c]) {
                elements[c] += 1;
            } else {
                elements[c] = 1;
            }
        });
        return new Cout(elements);
    }

    constructor(public elements: { [key: string]: number } = {}) {
    }

    toString() {
        console.log("to string");
        let s = '';
        Object.keys(this.elements).forEach(e => {
            for (let i = 0; i < this.elements[e]; i++) {
                s = s + e;
            }
        });
        return s;
    }

    add(cout: Cout) {
        Object.keys(cout.elements).forEach(e => {
            if (this.elements[e]) {
                this.elements[e] += cout.elements[e];
            } else {
                this.elements[e] = cout.elements[e];
            }
        });
    }
    moreThan(cout: Cout): boolean {
        let res = true;
        Object.keys(cout.elements).forEach(e => res = res && this.elements[e] && this.elements[e] >= cout.elements[e]);
        return !!res;
    }
    remove(cout: Cout) {
        Object.keys(cout.elements).forEach(e => {
            if (this.elements[e]) {
                this.elements[e] -= cout.elements[e];
            }
        });
    }
}
export abstract class Module {
    name: string;
    type: string;
    bot = false;
}
export abstract class BotModule extends Module {
    lootTable: Cout[];
    upgradeTable: Cout[];
    level = 1;
    bot = true;
}
export abstract class PlayerModule {
    stock: Cout[] = [];
    bot = false;
}

export class Culture extends PlayerModule {
    name = 'Culture';
    type = 'c';
}

export const Materiaux = {
    m: 'maïs',
    g: 'graines',
    l: 'laine',
    t: 'tissu',
    b: 'blé',
    a: 'arbre',
    w: 'bois',
    c: 'cheval',
    s: 'mouton',
    h: 'herbe',
    p: 'poisson',
    r: 'trésor',
    i: 'pierre',
    f: 'fer',
    _: 'rien'
};

export class BotCulture extends BotModule {
    name = 'Bot Culture';
    type = 'bc';
    bot = true;
    upgradeTable = [Cout.from('w'), Cout.from('wm'), Cout.from('mm')];
    lootTable = [Cout.from(''), Cout.from(''), Cout.from('g'), Cout.from('h'), Cout.from('m'), Cout.from('w'),
        Cout.from('gh'), Cout.from('hm'), Cout.from('mw'), Cout.from('hw'), Cout.from('mw')];
}

export class Elevage extends PlayerModule {
    name = 'Elevage';
    type = 'e';
}
export class BotElevage extends BotModule {
    name = 'Bot Elevage';
    type = 'be';
    bot = true;
    upgradeTable = [Cout.from('w'), Cout.from('wm'), Cout.from('mm')];
    lootTable = [Cout.from(''), Cout.from(''), Cout.from('g'), Cout.from('h'),
        Cout.from('m'), Cout.from('w'), Cout.from('gh'), Cout.from('hm'),
        Cout.from('mw'), Cout.from('hw'), Cout.from('mw')];
}

export class Mine extends PlayerModule {
    name = 'Mine';
    type = 'm';
}
export class BotMine extends  BotModule {
    name = 'Bot Mine';
    type = 'bm';
    bot = true;
    upgradeTable = [Cout.from('w'), Cout.from('wm'), Cout.from('mm')];
    lootTable = [Cout.from(''), Cout.from(''), Cout.from('g'), Cout.from('h'),
        Cout.from('m'), Cout.from('w'), Cout.from('gh'), Cout.from('hm'),
        Cout.from('mw'), Cout.from('hw'), Cout.from('mw')];
}

export class Peche extends PlayerModule {
    name = 'Peche';
    type = 'p';
    nbDes = 3;
    des: number[] = [];
    relance: boolean[] = [];
    numRelance = 1;
    nbRelances = 1;
    lanceDes() {
        this.des = [];
        this.relance = [];
        for (let i = 0; i < this.nbDes; i++) {
            this.des.push(random(1, 6));
            this.relance.push(false);
        }
    }
    relanceDes() {
        for (let i = 0; i < this.nbDes; i++) {
            if (this.relance[i]) {
                this.des[i] = random(1, 6);
            }
            this.relance[i] = false;
        }
    }
    hasRelance() {
        return this.numRelance < 2 + this.nbRelances;
    }
    toMatos(de: number) {
        switch (de) {
            case 1: return Cout.from("");
            case 2: return Cout.from("p");
            case 3: return Cout.from("pp");
            case 4: return Cout.from("ppp");
            case 5: return Cout.from("r");
            case 6: return Cout.from("b");
        }
    }
}
export class BotPeche extends BotModule {
    name = 'Bot Peche';
    type = 'bp';
    bot = true;
    upgradeTable = [Cout.from('w'), Cout.from('wm'), Cout.from('mm')];
    lootTable = [Cout.from(''), Cout.from(''), Cout.from('p'), Cout.from('p'),
        Cout.from('pp'), Cout.from('r'), Cout.from('pp'), Cout.from('pp'),
        Cout.from('pr'), Cout.from('ppp'), Cout.from('ppr')];
}

export class Partie {
    culture: Module;
    elevage: Module;
    mine: Module;
    peche: Module;

    constructor(
        culture: boolean = false,
        elevage: boolean = false,
        mine: boolean = false,
        peche: boolean = false) {
        if (culture) {
            this.culture = new Culture();
        } else {
            this.culture = new BotCulture();
        }

        if (elevage) {
            this.elevage = new Elevage();
        } else {
            this.elevage = new BotElevage();
        }
        if (mine) {
            this.mine = new Mine();
        } else {
            this.mine = new BotMine();
        }
        if (peche) {
            this.peche = new Peche();
        } else {
            this.peche = new BotPeche();
        }
    }
}
