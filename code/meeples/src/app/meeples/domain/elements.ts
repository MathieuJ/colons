
export class Element {
  constructor(public nom: string, public description: string, public isA: Element[] = []) { }
}

export const NOURRITURE = new Element('Nourriture', 'Nourriture');
export const VIANDE = new Element('Viande', 'Nourriture', [NOURRITURE]);
export const EAU = new Element('EAU', 'EAU', []);
export const LEGUME = new Element('Légume', 'Légume', [NOURRITURE]);
export const FRUIT = new Element('Fruit', 'Fruit', [NOURRITURE]);
export const BOIS = new Element('Bois', 'Bois de construction ou pour feu', []);
export const PIERRE = new Element('Pierre', 'Pierre pour construction', []);
export const VIANDE_SECHEE = new Element('Viande séchée', 'Nourriture qui se conserve', [VIANDE, NOURRITURE]);
export const HERBE = new Element('HERBE', 'HERBE', []);

export const Elements = {
  'N': NOURRITURE,
  'V': VIANDE, 
  'E': EAU,
  'L': LEGUME,
  'F': FRUIT,
  'B': BOIS,
  'P': PIERRE,
  'I': VIANDE_SECHEE,
  'H': HERBE
}