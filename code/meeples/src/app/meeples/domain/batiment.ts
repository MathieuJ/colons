import { Cout } from './cout';
import { Cellule } from './cellule';

export class TypeBatiment {
    public sizeY: any;
    public sizeX: any;
    public posX: number;
    public posY: number;
    constructor(public nom: string, public description: string, public cout: Cout, public travail: number, public progression = 0) {}
    withSpriteCoords(x: number, y: number, sizeX, sizeY) {
      this.posX = x;
      this.posY = y;
      this.sizeX = sizeX;
      this.sizeY = sizeY;
      return this;
    }
  }
  
  export enum TYPE_BATIMENT {
    ROBOT,
    FEU_DE_CAMP,
    PUITS,
    FOYER,
    HUTTE,
    CABANE,
    LOGE,
    MINE_ARGILE,
    CARRIERE_PIERRE,
    ATELIER,
    MAISON
  }
  
  export const TypesBatiments = {
    ROBOT: new TypeBatiment('Robot', 'Votre robot', new Cout(), 0).withSpriteCoords(49, 1, 2, 2),
    FEU_DE_CAMP: new TypeBatiment('Feu de camp', 'Petit feu pour se chauffer et cuisiner', new Cout({ 'P': 4, 'B': 2 }), 1),
    PUITS: new TypeBatiment('Puits', 'Trou dans la terre', new Cout(), 2),
    FOYER: new TypeBatiment('Foyer', 'Feu de camp amélioré', new Cout({ 'P': 4, 'B': 2 }), 1),
    HUTTE: new TypeBatiment('Hutte', 'Abri pour dormir', new Cout({ 'P': 4, 'B': 2 }), 1).withSpriteCoords(72, 11, 3, 4),
    CABANE: new TypeBatiment('Cabane', 'Abri', new Cout({ 'P': 4, 'B': 2 }), 3),
    LOGE: new TypeBatiment('Loge', 'Abri', new Cout({ 'P': 4, 'B': 2 }), 5),
    MINE_ARGILE: new TypeBatiment('Cabane', 'Abri', new Cout({ 'P': 4, 'B': 2 }), 3),
    CARRIERE_PIERRE: new TypeBatiment('Cabane', 'Abri', new Cout({ 'P': 4, 'B': 2 }), 4),
    ATELIER: new TypeBatiment('Aterlier', 'Abri', new Cout({ 'P': 4, 'B': 2 }), 1),
    MAISON: new TypeBatiment('Cabane', 'Abri', new Cout({ 'P': 4, 'B': 2 }), 1),
    SIDO: new TypeBatiment('Sido', 'Maison avec toit rouge et murs blancs', new Cout({ 'P': 4, 'B': 2 }), 0, 0)
  };
  
  export class Batiment {
    constructor(public cellule: Cellule, public typeBatiment: TypeBatiment, infos: any[]) {}
  }
  