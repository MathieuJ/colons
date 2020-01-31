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
  
  traits: TRAIT[] = [];
  /*sante: number;
  esperance: number;
  satiete: number;
  parent1: Meeple;
  parent2: Meeple;
  
  energie = 1;
  energieMax = 3;
  bonheur = 2;
  */
  color1: string;
  color2: string;
  /*status: string;
  */
  couche: Cellule;
 
  histoire: { sommeil?: number; bouffe?: number; eau?: number }[] = [];
  constructor(public id: number, public nom: string, public naissance: number) {}

  aTrait(trait: TRAIT): boolean {
    return this.traits.indexOf(trait) > -1;
  }

  position: Cellule;
  setPosition(cellule: Cellule) {
    if (cellule != this.position) {
      this.position.removeMeeplePresent(this);
      cellule.meeplesPresents.push(this);  
      this.position = cellule;
    }
  }

  ajouteHistoire() {
    this.histoire.unshift({})
  }
}
