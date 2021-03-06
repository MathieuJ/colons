import { Meeple } from './meeple';
import { HexaTerrain, HexaCellule } from './hexaTerrain';
import { Batiment, ProtoBatiment, PROTOS_BATIMENTS } from './batiment';
import { Cellule, TYPE_CELLULE } from './cellule';
import { random, melange, randomElement } from 'src/app/utils.functions';
import { TYPE_TARGET } from './message';
import { Cout, MATERIAU } from 'src/app/meeples/domain/cout';


export class Element {
  constructor(public nom: string, public description: string) { }
}

export class SelectedElement {
  type: TYPE_TARGET;
  batiment?: Batiment;
  cellule?: HexaCellule;
  meeple?: Meeple;
  carte?: Carte;
}

export class Carte extends Element {
  constructor(public code: string, public cout: string, nom: string, description: string) {
    super(nom, description);
  }
}

export const CARTES = [];
function addCARTE(carte) {
  CARTES[carte.code] = carte;
}
addCARTE(new Carte('rec', '', 'recolte', ''));
addCARTE(new Carte('rech', '', 'recherche', ''));
addCARTE(new Carte('def', '', 'defense', ''));
addCARTE(new Carte('hunt', '', 'chasse', ''));
addCARTE(new Carte('expl', '', 'exploration', ''));
addCARTE(new Carte('cstr', '', 'construction', ''));

addCARTE(new Carte('eau', '2', 'eau', "fournit 10 rations d'eau"));
addCARTE(new Carte('eau 2', '2', 'eau niveau 2', "fournit 30 rations d'eau"));
addCARTE(new Carte('cstr 2', '', 'construction avancée', ''));
addCARTE(new Carte('chal', '', 'chaleur', ''));
addCARTE(new Carte('heal', '', 'soin mineur', ''));
addCARTE(new Carte('heal 2', '', 'soin majeur', ''));
addCARTE(new Carte('def', '', 'defense', ''));
addCARTE(new Carte('rem', '', 'remove', ''));
export enum COLONIE_STATUS {
  // les colons savent qu'il faut endurer
  CONCILIANT,
  // les colons sont un peu plus couineurs
  NORMAL,
  // les colons exigent de voir votre manager
  EXIGEANT
}
export class Partie {
  public status: COLONIE_STATUS = COLONIE_STATUS.CONCILIANT;
  public logs: string[] = [];
  public cartesPaquet: Carte[];
  public reserve: {} = {};
  public cartesMain: Carte[] = [];
  public cartesDefausse: Carte[];
  public meeples: Meeple[] = [];
  public terrain: HexaTerrain;
  public batiments: Batiment[] = [];
  public plansDisponibles: ProtoBatiment[] = [];
  // public actionsMeeples: ActionMeeples[] = [];

  public dateDemarrage = random(100, 200);
  public date = 1;
  public generalId = 0;
  private meepleSyllabes = ['ga', 'fur', 'gol', 'bo', 'ber', 'dil', 'ne', 'zu', 'ra', 'meu', 'mul', 'ta', 'ni'];

  constructor() {
  }

  public addBatiment(cellule: HexaCellule, protoBatiment: ProtoBatiment) {
    const batiment = new Batiment(cellule, protoBatiment, []);
    this.batiments.push(batiment);
    cellule.batiment = batiment;
  }

  public sendMeeple(meeple: Meeple, cellule: HexaCellule) {
    // on deplace le meeple de cellule
    const celluleOrigine = meeple.position;
    if (celluleOrigine) {
      console.log(celluleOrigine.meeplesPresents, meeple, celluleOrigine.meeplesPresents.filter(m => m.id !== meeple.id));
      celluleOrigine.meeplesPresents = celluleOrigine.meeplesPresents.filter(m => m.id !== meeple.id);
      console.log(celluleOrigine.meeplesPresents);
    }
    cellule.meeplesPresents.push(meeple);
    meeple.position = cellule;

    // on vire le meeple de son potentiel autre boulot
    /*const currentMeepleAmIdx = this.actionsMeeples.findIndex(ams => ams.meeples.indexOf(meeple) > -1);
    if (currentMeepleAmIdx > -1) {
      const meepleIdx = this.actionsMeeples[currentMeepleAmIdx].meeples.indexOf(meeple);
      delete this.actionsMeeples[currentMeepleAmIdx].meeples[meepleIdx];
    } else {
      console.log("meeple not found");
    }*/
    /*if (cellule.actionMeeples) {
      const am = cellule.actionMeeples;
      if (am.meeples.indexOf(meeple) > -1) {
        this.log('Ce meeple bosse déjà sur cette case !');
      } else {
        am.meeples.push(meeple);
      }
    } else {
      this.log("Pas d'action sur cette case");
    }*/
  }

  /*addActionMeeples(cellule: Cellule, carte: Carte, plan?: TypeBatiment) {
    const oldAm = cellule.actionMeeples;
    if (oldAm) {
      this.actionsMeeples.splice(this.actionsMeeples.indexOf(oldAm), 1);
    }
    const newAm = new ActionMeeples(cellule, carte);
    cellule.actionMeeples = newAm;
    this.actionsMeeples.push(newAm);
    this.log('ajoute un am ' + cellule + ' de ' + carte);
  }*/

  /* public getActionMeeplesByCellule(cellule: Cellule, carte?: Carte): ActionMeeples {
    const a = this.actionsMeeples.filter(am => am.cellule === cellule && (!carte || am.carte === carte));
    return a.length > 0 ? a[0] : undefined;
  }

  public getActionMeeplesByMeeple(meeple: Meeple) {
    return this.actionsMeeples.filter(am => am.meeples.find(m => m === meeple));
  }*/

  public log(msg: string) {
    this.logs.push(msg);
  }

  public initReserve() {
    this.reserve = Cout.from('eeeeewwwph');
  }

  private initRobot() {
    this.cartesPaquet = [];
    this.cartesMain = [];
    this.cartesDefausse = [];
    this.cartesPaquet = [
      CARTES['expl'],
      CARTES['rec'],
      //  Object.assign({}, CARTES['rec']),
      CARTES['hunt'],
      //    Object.assign({}, CARTES['hunt']),
      CARTES['rech'],
      CARTES['def'],
      CARTES['cstr']
      //      Object.assign({}, CARTES['cstr'])
    ];

    melange(this.cartesPaquet);
    this.piocheX(4);
  }

  private piocheX(x: number) {
    for (let i = 0; i < x; i++) {
      console.log('pioche');
      this.pioche();
    }
  }

  private defausseMain() {
    const nbMain = this.cartesMain.length;
    for (let i = 0; i < nbMain; i++) {
      this.cartesDefausse.push(this.cartesMain.pop());
    }
  }

  private pioche() {
    if (this.cartesPaquet.length > 0) {
      this.cartesMain.push(this.cartesPaquet.pop());
    } else {
      if (this.cartesDefausse.length > 0) {
        this.log('Remelange de la défausse dans la pioche');
        this.cartesDefausse.forEach(c => this.cartesPaquet.push(c));
        this.cartesDefausse = [];
        this.cartesMain.push(this.cartesPaquet.pop());
      }
    }
  }

  public generateMeeples() {
    const meeple1 = this.generateMeeple(random(20, 40));
    const meeple2 = this.generateMeeple(random(20, 40));
    const meeple3 = this.generateMeeple(random(20, 40));
    this.meeples.push(meeple1);
    this.sendMeeple(meeple1, this.terrain.getVoisin(this.batiments[0].cellule, 1, 0));
    this.setCouche(meeple1, this.terrain.getVoisin(this.batiments[0].cellule, 1, 0));

    this.meeples.push(meeple2);
    this.sendMeeple(meeple2, this.terrain.getVoisin(this.batiments[0].cellule, -1, 0));
    this.setCouche(meeple2, this.terrain.getVoisin(this.batiments[0].cellule, -1, 0));
    this.meeples.push(meeple3);
    this.sendMeeple(meeple3, this.terrain.getVoisin(this.batiments[0].cellule, 0, -1));
    this.setCouche(meeple3, this.terrain.getVoisin(this.batiments[0].cellule, 0, -1));
  }

  public setCouche(meeple: Meeple, cellule: Cellule) {
    const oldCouche = meeple.couche;
    if (oldCouche) {
      oldCouche.dormeur = undefined;
    }
    cellule.dormeur = meeple;
    meeple.couche = cellule;
  }

  generateMeeple(age) {
    const meeple = new Meeple(this.generalId++, 'M' + this.generalId, this.generateMeepleName(), this.dateDemarrage - age);
    meeple.color1 = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')';
    meeple.color2 = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')';
    return meeple;
  }

  generateMeepleName(): string {
    const nbSyllabes = random(2, 4);
    let nom = '';
    for (let x = 0; x < nbSyllabes; x++) {
      nom = nom.concat(randomElement(this.meepleSyllabes));
    }
    return nom.substring(0, 10);
  }

  

  finTour() {
    this.meeples.forEach(m => {
      m.ajouteHistoire();
    });
    this.doActions();
    // meeples eat
    this.doMeepleDrink();
    this.doMeepleEat();
    this.doMeepleSleep();
    this.defausseMain();
    this.piocheX(4);
  }

  doActions() {
    this.meeples.forEach(m => {
      switch (m.action.typeAction) {
        /*case :
          const plan = am.plan;
          // this.retireReserve(plan);
          // if ()
          break;
        case 'hunt':
          break;
        case 'expl':
          break;*/
      }
    });
  }

  doMeepleSleep() {
    this.meeples.forEach(m => {
      if (!m.couche.batiment) {
        m.histoire[0].sommeil = 0;
      } else if (m.couche.batiment.proto === PROTOS_BATIMENTS.HUTTE) {
        m.histoire[0].sommeil = 1;
      } else if (m.couche.batiment.proto === PROTOS_BATIMENTS.CABANE) {
        m.histoire[0].sommeil = 2;
      }
    });
    this.log('Pas assez de nourriture pour tous.');
  }

  doMeepleEat() {
    const besoinBouffe = this.meeples.length * 2;
    const reserveBouffe = this.reserve[MATERIAU.VIANDE];
    this.log(this.meeples.length + ' meeples mangent chacun 2 portions ça fait ' + besoinBouffe + ' portions');
    this.log('Il y a ' + reserveBouffe + ' unités de nourriture de 4 portions chacune.');
    if (besoinBouffe >= reserveBouffe / 4) {
      this.log('Tout le monde mange');
      this.reserve['bouffe'] -= besoinBouffe;
      this.meeples.forEach(m => {
        m.histoire[0].bouffe = 2;
      });
    } else if (besoinBouffe >= reserveBouffe / 2) {
      // teste demi portion
      const nbUnites = Math.ceil(besoinBouffe / 4);
      this.log('Restriction de bouffe: une seule portion soit ' + nbUnites + ' unités.');
      this.reserve['bouffe'] -= nbUnites;
      this.meeples.forEach(m => {
        m.histoire[0].bouffe = 1;
      });
    } else {
      this.log('Pas assez de nourriture pour tous.');
      this.meeples.forEach(m => {
        m.histoire[0].bouffe = 0;
      });
    }
  }

  doMeepleDrink() {
    const besoinEau = this.meeples.length;
    const reserveEau = this.reserve[MATERIAU.EAU];
    if (besoinEau > reserveEau) {
      this.meeples.forEach(m => {
        m.histoire[0].eau = 0;
      });
      this.log("Pas assez d'eau pour tous.");
    } else {
      this.meeples.forEach(m => {
        m.histoire[0].eau = 1;
      });
      this.log('Tout le monde boit');
      this.reserve['eau'] -= besoinEau;
    }
  }
}
