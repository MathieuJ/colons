import { Element } from './elements';

export class Cout{

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