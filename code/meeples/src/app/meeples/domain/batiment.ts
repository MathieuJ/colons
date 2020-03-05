import { Cout } from './cout';
import { Cellule } from './cellule';
import { HexaCellule } from 'src/app/meeples/domain/hexaTerrain';

export class BatimentSprite {
    public sizeY: any;
    public sizeX: any;
    public posX: number;
    public posY: number;
    constructor(x: number, y: number, sizeX, sizeY) {
      this.posX = x;
      this.posY = y;
      this.sizeX = sizeX;
      this.sizeY = sizeY;
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

export class ProtoBatiment {
    sprite: BatimentSprite;
    constructor(public nom: string,
                public description: string,
                public cout: Cout) {
                  return this;
    }
    withSpriteCoords(a, b, c, d) {
      this.sprite = new BatimentSprite(a, b, c, d);
      return this;
    }
  }

export const PROTOS_BATIMENTS = {
    ROBOT: new ProtoBatiment('Robot', 'Votre robot', new Cout()).withSpriteCoords(49, 1, 2, 2),
    FEU_DE_CAMP: new ProtoBatiment('Feu de camp', 'Petit feu pour se chauffer et cuisiner', new Cout({ B: 1 })),
    PUITS: new ProtoBatiment('Puits', 'Trou dans la terre', new Cout()),
    FOYER: new ProtoBatiment('Foyer', 'Feu de camp amélioré', new Cout({ P: 4, B: 2 })),
    HUTTE: new ProtoBatiment('Hutte', 'Abri pour dormir', new Cout({ P: 4, B: 2 })).withSpriteCoords(72, 11, 3, 4),
    CABANE: new ProtoBatiment('Cabane', 'Abri', new Cout({ P: 4, B: 2 })),
    LOGE: new ProtoBatiment('Loge', 'Abri', new Cout({ P: 4, B: 2 })),
    MINE_ARGILE: new ProtoBatiment('Cabane', 'Abri', new Cout({ P: 4, B: 2 })),
    CARRIERE_PIERRE: new ProtoBatiment('Cabane', 'Abri', new Cout({ P: 4, B: 2 })),
    ATELIER: new ProtoBatiment('Aterlier', 'Abri', new Cout({ P: 4, B: 2 })),
    MAISON: new ProtoBatiment('Cabane', 'Abri', new Cout({ P: 4, B: 2 })),
    SIDO: new ProtoBatiment('Sido', 'Maison avec toit rouge et murs blancs', new Cout({ P: 4, B: 2 }))
  };


export class Batiment {
    constructor(public cellule: HexaCellule, public proto: ProtoBatiment, infos: any[]) {}
  }

