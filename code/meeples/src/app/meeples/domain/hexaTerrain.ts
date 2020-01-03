import { Cellule, CelluleType } from './cellule';

export class HexaCellule extends Cellule {
  hx: number;
  hy: number;
  hz: number;
  constructor(x: number, y: number, type: CelluleType) {
    super(x, y, type);
    this.hx = x;
    this.hy = Math.floor(x - y / 2);
    this.hz = -this.hx - this.hy;
  }
  /*public static  FromOffsetCoordinates (int x, int z) {
		return new HexCoordinates(x - z / 2, z);
	}*/
}

export class HexaTerrain {
  cases: HexaCellule[][] = [];
  constructor(public tailleX: number, public tailleY: number) {
    this.cases = [];
    for (let i = 0; i < tailleY; i++) {
      const ligne = [];
      this.cases.push(ligne);
      for (let j = 0; j < tailleX; j++) {
        ligne.push(new HexaCellule(j, i, CelluleType.TERRE));
      }
    }
  }
  getCellule(x, y): HexaCellule {
    return this.cases[(y + this.tailleY) % this.tailleY][(x + this.tailleX) % this.tailleX];
  }
  setCellule(x: number, y: number, celluleType: CelluleType) {
    this.getCellule(x, y).celluleType = celluleType;
  }

  getVoisin(cellule: HexaCellule, diffX: number, diffY: number) {
    return this.getCellule(cellule.x + diffX, cellule.y + diffY);
  }

  setVisible(cellule: HexaCellule) {
    cellule.visible = true;
  }

  setVisibleAvecVoisins(cellule: HexaCellule) {
    this.setVisible(cellule);
    this.setVisible(this.getVoisin(cellule, 1, 0));
    this.setVisible(this.getVoisin(cellule, -1, 0));
    this.setVisible(this.getVoisin(cellule, 0, 1));
    this.setVisible(this.getVoisin(cellule, 0, -1));
  }
}
