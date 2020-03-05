import { Cellule, CelluleType } from './cellule';

export class HexaCellule extends Cellule {
  hx: number;
  hy: number;
  hz: number;
  constructor(x: number, y: number, type: CelluleType) {
    super(x, y, type);
    this.hx = x - 5 - Math.floor((y-4)/2);
    this.hz = (y-4); //Math.floor((x-5) - (y-4) / 2); //-this.hx - this.hy;
    this.hy = -this.hx -this.hz;
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

  getDistance(cellule1: Cellule, cellule2: Cellule) {
    return Math.abs(cellule1.x - cellule2.x) + Math.abs(cellule1.y - cellule2.y);
  }

  getHexDistance(cellule1: HexaCellule, cellule2: HexaCellule) {
    return (Math.abs(cellule1.hx - cellule2.hx) + 
    Math.abs(cellule1.hy - cellule2.hy) + 
    Math.abs(cellule1.hz - cellule2.hz)) / 2; 
  }

  getHexVoisins(cellule: HexaCellule, distanceMax: number): HexaCellule[] {
    const voisins: HexaCellule[] = [];
    for (const ligne of this.cases) {
        for (const cell of ligne) {
          const distance = this.getHexDistance(cell, cellule);
          if (distance > 0 && distance <= distanceMax) {
            voisins.push(cell);
          }
        }
    }
    console.log("voinsins", voisins);
    return voisins;
  }

  getVoisins(cellule: HexaCellule, distanceMax: number): HexaCellule[] {
    const voisins: HexaCellule[] = [];
    for (let ligne of this.cases) {
        for (let cell of ligne) {
          let distance = this.getDistance(cell, cellule);
          if (distance > 0 && distance <= distanceMax) {
            voisins.push(cell);
          }
        }
    }
    return voisins;
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
