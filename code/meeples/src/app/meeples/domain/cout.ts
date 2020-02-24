import { Element } from './elements';

export const Materiaux = {
    e: 'eau',
    b: 'bois',
    a: 'argile',
    i: 'minerai de fer',
    f: 'fer',
    p: 'planche',
    v: 'viande',
    o: 'poisson',
    r: 'pierre',
    h: 'herbe',
    c: 'corde'
    /*m: 'maïs',    g: 'graines',    l: 'laine',    t: 'tissu',
    b: 'blé',    a: 'arbre',w: 'bois',    c: 'cheval',s: 'mouton',    h: 'herbe',    r: 'trésor',
        f: 'fer',
    _: 'rien'*/
};

export const MATERIAU = {
    BOIS: 'w', TISSU: 't', EAU: 'e', ARGILE: 'a', MINERAI_FER: 'i', FER: 'f', PLANCHE: 'p', VIANDE: 'v',
    POISSON: 'o', PIERRE: 'r', CORDE: 'c', HERBE: 'h'
};

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

    constructor(public elements: {[key: string]: number} = {}) {

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
        Object.keys(cout.elements).forEach(e => res = res && this.elements[e] && this.elements[e] > cout.elements[e])
        return res;
    }

    remove(cout: Cout) {
        Object.keys(cout.elements).forEach(e => {
            if (this.elements[e]) {
                this.elements[e] -= cout.elements[e];
            }
        });
    }
}