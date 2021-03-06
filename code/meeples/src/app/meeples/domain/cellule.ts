import { Meeple } from './meeple';
import { Batiment, ProtoBatiment } from './batiment';
import { Carte } from './partie';

export enum TYPE_CELLULE {
  OCEAN,
  MER,
  SABLE,
  TERRE,
  PIERRE,
  LAVE,
  EAU,
  FORET,
  PLAINE
}
/*
export class ActionMeeples {
  constructor(public cellule: Cellule, public carte: Carte, public plan: ProtoBatiment, public meeples: Meeple[] = []) {}
}*/

export class Cellule {
  public selected = false;
  public accessible = false;
  public contenu: any[] = [];
  public batiment: Batiment;

  public meeplesPresents: Meeple[] = [];

  public bgX: number;
  public bgY: number;
  public cssTerrain = '';
  public bgColor: string;
  public visible = false;
  public dormeur: Meeple = undefined;
  // juste pour l'opti
  //,public actionMeeples: ActionMeeples;
  constructor(public x: number, public y: number, public celluleType: TYPE_CELLULE) {
    this.setTYPE_CELLULE(celluleType);
    this.contenu = [];
  }

  removeMeeplePresent(meeple: Meeple) {
    this.meeplesPresents = this.meeplesPresents.filter(m => m != meeple);
  }

  setTYPE_CELLULE(celluleType: TYPE_CELLULE) {
    this.celluleType = celluleType;
    switch (celluleType) {
      case TYPE_CELLULE.EAU:
        this.bgX = 23;
        this.bgY = 29;
        this.bgColor = '#EEEEEE';
        this.cssTerrain = 'eau';
        break;
      case TYPE_CELLULE.MER:
        this.bgX = 23;
        this.bgY = 29;
        this.cssTerrain = 'mer';
        break;
      case TYPE_CELLULE.PIERRE:
        this.bgX = 30;
        this.bgY = 24;
        this.cssTerrain = 'pierre';

        break;
      case TYPE_CELLULE.SABLE:
        this.bgX = 5;
        this.bgY = 1;
        this.cssTerrain = 'sable';

        break;
      case TYPE_CELLULE.TERRE:
        this.bgX = 4;
        this.bgY = 0;
        this.cssTerrain = 'terre';

        break;
      case TYPE_CELLULE.FORET:
        const a = Math.floor(Math.random() * 4);
        if (a === 0) {
          this.bgX = 19;
          this.bgY = 19;
        } else if (a === 1) {
          this.bgX = 20;
          this.bgY = 19;
        } else if (a === 2) {
          this.bgX = 21;
          this.bgY = 19;
        } else {
          this.bgX = 22;
          this.bgY = 19;
        }
        this.cssTerrain = 'foret';

        break;
      case TYPE_CELLULE.PLAINE:
        this.bgX = 12;
        this.bgY = 0;
        this.cssTerrain = 'plaine';

        break;
    }
  }
  addObject(objet: any) {
    this.contenu.push(objet);
  }
}

export class Terrain {
  cases: Cellule[][] = [];

  constructor(public tailleX: number, public tailleY: number) {
    this.cases = [];
    for (let i = 0; i < tailleY; i++) {
      const ligne = [];
      this.cases.push(ligne);
      for (let j = 0; j < tailleX; j++) {
        ligne.push(new Cellule(j, i, TYPE_CELLULE.TERRE));
      }
    }
  }

  getCellule(x, y): Cellule {
    return this.cases[(y + this.tailleY) % this.tailleY][(x + this.tailleX) % this.tailleX];
  }

  setCellule(x: number, y: number, celluleType: TYPE_CELLULE) {
    this.getCellule(x, y).celluleType = celluleType;
  }

  getVoisin(cellule: Cellule, diffX: number, diffY: number) {
    return this.getCellule(cellule.x + diffX, cellule.y + diffY);
  }

  setVisible(cellule: Cellule) {
    cellule.visible = true;
  }

  setVisibleAvecVoisins(cellule: Cellule) {
    this.setVisible(cellule);
    this.setVisible(this.getVoisin(cellule, 1, 0));
    this.setVisible(this.getVoisin(cellule, -1, 0));
    this.setVisible(this.getVoisin(cellule, 0, 1));
    this.setVisible(this.getVoisin(cellule, 0, -1));
  }
}
