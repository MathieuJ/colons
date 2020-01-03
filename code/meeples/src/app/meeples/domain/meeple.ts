import { Cellule } from './cellule';

export class Trait {
  constructor(public nom: string, public description: string) {}
}

export enum TRAIT {
  RONFLEUR,
  GROS_MANGEUR,
  PETIT_MANGEUR,
  GERMOPHOBE
}

export const traits = {
  RONFLEUR: new Trait('Ronfleur', 'Gêne les gens dormant dans la même pièce ou à proximité'),
  GROS_MANGEUR: new Trait('Gros mangeur', 'A besoin de plus de nourriture pour être rassasié'),
  PETIT_MANGEUR: new Trait('Petit mangeur', 'A besoin de moins de nourriture pour être rassasié'),
  GERMOPHOBE: new Trait('Germophobe', 'Refuse tout contact avec des malades ou blessés'),
  PACIFISTE: new Trait('Pacifiste', 'Déteste la violence'),
  JOVIAL: new Trait('Jovial', "S'entend facilement avec les autres"),
  MEDISANT: new Trait('Médisant', 'Se fâche facilement avec les autres'),
  JALOUX: new Trait('Jaloux', 'Est susceptible aux différences de traitement'),
  INTERIEUR: new Trait('Intérieur', "Préfère travailler à l'intérieur. +1 joie"),
  EXTERIEUR: new Trait('Extérieur', "Préfère travailler à l'extérieur. +1 joie"),
  NUL: new Trait('', '')
};

export class Meeple {
  sante: number;
  esperance: number;
  satiete: number;
  parent1: Meeple;
  parent2: Meeple;
  traits: TRAIT[] = [];
  energie = 1;
  energieMax = 3;
  bonheur = 2;
  color1: string;
  color2: string;
  status: string;
  couche: Cellule;
  histoire: { sommeil?: number; bouffe?: number; eau?: number }[] = [];
  constructor(public id: number, public nom: string, public naissance: number) {}

  aTrait(trait: TRAIT): boolean {
    return this.traits.indexOf(trait) > -1;
  }
}

export class Objet {
  flags?: string[];
  constructor(public nom: string, public description: string) {}
}

export enum OBJET {
  VIANDE,
  BOIS,
  PIERRE,
  SABLE,
  LEGUME,
  FRUIT,
  ARGILE,
  TERRE,
  FER,
  CUIVRE,
  HERBE,
  VIANDE_SECHEE,
  BRIQUE
}

export const objets = {
  VIANDE: new Objet('Viande', 'Nourriture'),
  BOIS: new Objet('Bois', 'Bois de construction ou pour feu'),
  PIERRE: new Objet('Pierre', 'Pierre pour construction'),
  SABLE: new Objet('Sable', 'Sable'),
  LEGUME: new Objet('Légume', 'Nourriture'),
  FRUIT: new Objet('Fruit', 'Nourriture'),
  ARGILE: new Objet('Argile', 'Matériau de construction ou artisanat'),
  FER: new Objet('Fer', 'materiau de construction ou artisanat'),
  CUIVRE: new Objet('CUIVRE', "matériau d'artisanat"),
  HERBE: new Objet('Herbe', 'Nourriture ou soin'),
  VIANDE_SECHEE: new Objet('Viande séchée', 'Nourriture qui se conserve'),
  BRIQUE: new Objet('Brique', 'brique rouge ou blanche')
};
