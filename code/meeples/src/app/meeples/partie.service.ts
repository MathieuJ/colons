import { Injectable } from '@angular/core';
import { MessageService } from 'src/app/meeples/message.service';
import { Message, MessageType, TYPE_TARGET } from 'src/app/meeples/domain/message';
import { Partie, Carte, SelectedElement } from 'src/app/meeples/domain/partie';
import { Batiment, ProtoBatiment, PROTOS_BATIMENTS } from 'src/app/meeples/domain/batiment';
import { HexaCellule, HexaTerrain } from 'src/app/meeples/domain/hexaTerrain';
import { Meeple } from './domain/meeple';
import { Cellule, TYPE_CELLULE } from './domain/cellule';
import { Action, TYPE_ACTION, ProtoAction, PROTOACTIONS } from 'src/app/meeples/domain/action';
import { Cout } from 'src/app/meeples/domain/cout';

@Injectable({
  providedIn: 'root'
})
export class MeeplePartieService {
  partie: Partie;
  selectedElement: SelectedElement = { type: TYPE_TARGET.NONE };

  executeAction(meeple: Meeple, action: Action): any {
    console.log("action", meeple, action);
    meeple.deplacement = meeple.deplacementMax;
    meeple.action = action;
    this.unselectMeeple(meeple);
  }


  constructor(private messageService: MessageService) {
    this.partie = new Partie();
    this.initPartie();
  }

  initPartie() {
    this.partie.terrain = this.buildTerrain();
    const c = this.partie.terrain.getCellule(7, 4);
    this.partie.addBatiment(c, PROTOS_BATIMENTS.ROBOT);
    c.visible = true;
    this.partie.terrain.getHexVoisins(c, 2).forEach(c => c.visible = true);

    this.partie.generateMeeples();
    this.partie.initReserve();
    this.partie.plansDisponibles.push(PROTOS_BATIMENTS.HUTTE, PROTOS_BATIMENTS.FEU_DE_CAMP, PROTOS_BATIMENTS.MINE_ARGILE);
    this.partie.log('Init fini');
  }

  getPartie() {
    return this.partie;
  }

  endStep() {
    const test = [];
    test.push('a');
    this.partie.meeples.forEach(meeple => {
      meeple.deplacement = 0;
      if (meeple.action) {
        console.log("meeple action ", meeple.action);
        if (meeple.action.typeAction === TYPE_ACTION.EXPLORATION) {
          this.partie.terrain.getHexVoisins(meeple.position, 2).map(v => v.visible = true);
        }
        if (meeple.action.typeAction === TYPE_ACTION.RECOLTE) {
        }
        if (meeple.action.typeAction === TYPE_ACTION.CONSTRUCTION) {
          meeple.position.batiment = new Batiment(meeple.position, meeple.action.batiment, []);
        }
      }
      meeple.action = undefined;
    });
  }
  unselect() {
    this.partie.terrain.cases.map(l => l.map(c => c.accessible = false));
    if (this.selectedElement.meeple) {
      this.selectedElement.meeple.selected = false;
      this.selectedElement.meeple = undefined;
    }
    if (this.selectedElement.cellule) {
      this.selectedElement.cellule.selected = false;
      this.selectedElement.cellule = undefined;
    }
    this.selectedElement.type = TYPE_TARGET.NONE;
  }

  selectCellule(cellule: HexaCellule) {
    console.log("elect", this.selectedElement);
    if (this.selectedElement.meeple && cellule.visible) {
      const m = this.selectedElement.meeple;
      const p = m.position;
      const d = this.partie.terrain.getHexDistance(cellule, p);
      if (d > m.deplacementMax - m.deplacement) {
        this.messageService.sendMessage(new Message(MessageType.LOG, 'trop loin'));
      } else {
        this.getPartie().sendMeeple(this.selectedElement.meeple, cellule);
        m.deplacement += d;
        this.messageService.sendMessage(new Message(MessageType.MOVE, cellule));
        this.unselect();
        this.messageService.sendMessage(new Message(MessageType.SELECT, this.selectedElement));
      }
    } else {
      this.unselect();
      this.selectedElement = { type: TYPE_TARGET.CELLULE, cellule };
      cellule.selected = true;
      this.messageService.sendMessage(new Message(MessageType.SELECT, this.selectedElement));
    }
  }

  unselectMeeple(meeple: Meeple) {
    this.unselect();
    meeple.selected = false;
    this.messageService.sendMessage(new Message(MessageType.SELECT, this.selectedElement));
  }

  selectMeeple(meeple: Meeple) {
    if (this.selectedElement.meeple === meeple) {
      this.unselectMeeple(meeple);
    } else {
      this.unselect();
      meeple.selected = true;
      this.selectedElement.meeple = meeple;
      this.selectedElement.type = TYPE_TARGET.MEEPLE;
      this.showAccessibles(meeple.position, meeple.deplacementMax - meeple.deplacement);
      this.messageService.sendMessage(new Message(MessageType.SELECT, this.selectedElement));
    }
  }

  showAccessibles(cellule, distance) {
    this.partie.terrain.getHexVoisins(cellule, distance).map(c => {
      if (c.visible) {
        c.accessible = true;
      }
    }
    );
  }

  getActionsPossibles(meeple: Meeple): ProtoAction[] {
    const cellule = meeple.position;
    const actions: ProtoAction[] = [];
    if (cellule.batiment) {
      // switch (cellule.batiment.proto) {
      actions.push(PROTOACTIONS.TRAVAIL);
      actions.push(PROTOACTIONS.REPARATION);
      // }
    } else {
      this.partie.plansDisponibles.forEach(pd => {
        actions.push(new ProtoAction(TYPE_ACTION.CONSTRUCTION, 'Construire', null, Cout.from(''), 1, null, pd));
      });
    }
    actions.push(PROTOACTIONS.EXPLORATION_1);
    switch (meeple.position.celluleType) {
      case TYPE_CELLULE.FORET:
      actions.push(PROTOACTIONS.CHASSE_F_1);
      actions.push(PROTOACTIONS.RECOLTE_F_1);
      break;
      case TYPE_CELLULE.PLAINE:
        actions.push(PROTOACTIONS.CHASSE_P_1);
        actions.push(PROTOACTIONS.CHASSE_P_2);
        actions.push(PROTOACTIONS.RECOLTE_P_1);
        actions.push(PROTOACTIONS.RECOLTE_P_2);
        break;
case TYPE_CELLULE.EAU:
actions.push(PROTOACTIONS.PECHE_E_1);
}
    return actions;
  }

  public buildTerrain(): HexaTerrain {
    const terrain = new HexaTerrain(12, 8);
    for (let x = 0; x < 12; x++) {
      for (let y = 0; y < 8; y++) {
        if (x < 2 || (x < 3 && y > 2) || (x < 4 && y > 3)) {
          terrain.getCellule(x, y).setTYPE_CELLULE(TYPE_CELLULE.FORET);
        }
        if (x > 10 || (x > 9 && y < 6) || (x > 8 && y < 4)) {
          terrain.getCellule(x, y).setTYPE_CELLULE(TYPE_CELLULE.PIERRE);
        }
      }
    }
    terrain.getCellule(5, 0).setTYPE_CELLULE(TYPE_CELLULE.EAU);
    terrain.getCellule(6, 0).setTYPE_CELLULE(TYPE_CELLULE.EAU);
    terrain.getCellule(6, 1).setTYPE_CELLULE(TYPE_CELLULE.EAU);
    terrain.getCellule(7, 1).setTYPE_CELLULE(TYPE_CELLULE.EAU);
    terrain.getCellule(8, 1).setTYPE_CELLULE(TYPE_CELLULE.EAU);
    terrain.getCellule(8, 2).setTYPE_CELLULE(TYPE_CELLULE.EAU);
    for (let i = 9; i < 12; i++) {
      terrain.getCellule(i, 2).setTYPE_CELLULE(TYPE_CELLULE.EAU);
    }
    return terrain;
  }
}
