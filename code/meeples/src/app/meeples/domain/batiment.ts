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
    ROBOT: new TypeBatiment('Robot', 'Votre robot', {}, 0).withSpriteCoords(49, 1, 2, 2),
    FEU_DE_CAMP: new TypeBatiment('Feu de camp', 'Petit feu pour se chauffer et cuisiner', { PIERRE: 2, BOIS: 2 }, 1),
    PUITS: new TypeBatiment('Puits', 'Trou dans la terre', {}, 2),
    FOYER: new TypeBatiment('Foyer', 'Feu de camp amélioré', { PIERRE: 4, BOIS: 2 }, 1),
    HUTTE: new TypeBatiment('Hutte', 'Abri pour dormir', { BOIS: 2, HERBE: 2 }, 1).withSpriteCoords(72, 11, 3, 4),
    CABANE: new TypeBatiment('Cabane', 'Abri', { BOIS: 4, HERBE: 4 }, 3),
    LOGE: new TypeBatiment('Loge', 'Abri', { PIERRE: 4, BOIS: 3 }, 5),
    MINE_ARGILE: new TypeBatiment('Cabane', 'Abri', { BOIS: 1 }, 3),
    CARRIERE_PIERRE: new TypeBatiment('Cabane', 'Abri', { BOIS: 4 }, 4),
    ATELIER: new TypeBatiment('Aterlier', 'Abri', { BOIS: 4, HERBE: 4 }, 1),
    MAISON: new TypeBatiment('Cabane', 'Abri', { BOIS: 4, HERBE: 4 }, 1),
    SIDO: new TypeBatiment('Sido', 'Maison avec toit rouge et murs blancs', { BRIQUE: 9 }, 0, 0)
  };
  
  export class Batiment {
    constructor(public cellule: Cellule, public typeBatiment: TypeBatiment, infos: any[]) {}
  }
  