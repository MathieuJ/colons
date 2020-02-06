export class Cout {
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
    bot: boolean = false;
}
export interface Bot {
    getLootTable();
    getUpgradeTable();
}

export class Culture extends Module {
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
    f: 'fer'
};

export class BotCulture extends Module implements Bot {
    name = 'Bot Culture';
    type = 'bc';
    bot = true;
    getUpgradeTable() {
        return [Cout.from('w'), Cout.from('wm'), Cout.from('mm')];
    }
    getLootTable() {
        return [Cout.from(''), Cout.from(''), Cout.from('g'), Cout.from('h'), Cout.from('m'), Cout.from('w'),
        Cout.from('gh'), Cout.from('hm'), Cout.from('mw'), Cout.from('hw'), Cout.from('mw')];
    }
}
export class Elevage extends Module {
    name = 'Elevage';
    type = 'e';
}
export class BotElevage extends Module implements Bot {
    name = 'Bot Elevage';
    type = 'be';
    bot = true;
    getUpgradeTable() {
        return [Cout.from('w'), Cout.from('wm'), Cout.from('mm')];
    }
    getLootTable() {
        return [Cout.from(''), Cout.from(''), Cout.from('g'), Cout.from('h'),
        Cout.from('m'), Cout.from('w'), Cout.from('gh'), Cout.from('hm'),
        Cout.from('mw'), Cout.from('hw'), Cout.from('mw')];
    }
}

export class Mine extends Module {
    name = 'Mine';
    type = 'm';
}
export class BotMine extends Module implements Bot {
    name = 'Bot Mine';
    type = 'bm';
    bot = true;
    getUpgradeTable() {
        return [Cout.from('w'), Cout.from('wm'), Cout.from('mm')];
    }
    getLootTable() {
        return [Cout.from(''), Cout.from(''), Cout.from('g'), Cout.from('h'),
        Cout.from('m'), Cout.from('w'), Cout.from('gh'), Cout.from('hm'),
        Cout.from('mw'), Cout.from('hw'), Cout.from('mw')];
    }
}

export class Peche extends Module {
    name = 'Peche';
    type = 'p';
}
export class BotPeche extends Module implements Bot {
    name = 'Bot Peche';
    type = 'bp';
    bot = true;
    getUpgradeTable() {
        return [Cout.from('w'), Cout.from('wm'), Cout.from('mm')];
    }
    getLootTable() {
        return [Cout.from(''), Cout.from(''), Cout.from('p'), Cout.from('p'),
        Cout.from('pp'), Cout.from('r'), Cout.from('pp'), Cout.from('pp'),
        Cout.from('pr'), Cout.from('ppp'), Cout.from('ppr')];
    }
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
