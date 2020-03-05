import { Injectable } from '@angular/core';
import { MessageService } from 'src/app/meeples/message.service';
import { Message, MessageType, TYPE_TARGET } from 'src/app/meeples/domain/message';
import { Partie, Carte, SelectedElement } from 'src/app/meeples/domain/partie';
import { Batiment, ProtoBatiment, PROTOS_BATIMENTS } from 'src/app/meeples/domain/batiment';
import { HexaCellule } from 'src/app/meeples/domain/hexaTerrain';
import { Meeple } from './domain/meeple';
import { Cellule, TYPE_CELLULE } from './domain/cellule';
import { Action, TYPE_ACTION, ProtoAction } from 'src/app/meeples/domain/action';

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
  }


  constructor(private messageService: MessageService) {
    this.partie = new Partie();
  }

  getPartie() {
    return this.partie;
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

  selectMeeple(meeple: Meeple) {
    if (this.selectedElement.meeple === meeple) {
      this.unselect();
      meeple.selected = false;
      this.messageService.sendMessage(new Message(MessageType.SELECT, this.selectedElement));
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
      actions.push(new ProtoAction(TYPE_ACTION.TRAVAIL, 'bosser'));
      // }
    } else {
      actions.push(new ProtoAction(TYPE_ACTION.CONSTRUCTION, 'construire un bâtiment', PROTOS_BATIMENTS.FEU_DE_CAMP));
      // actions.push(new ProtoAction(TYPE_ACTION.CONSTRUCTION, 'construire un bâtiment', PROTOS_BATIMENTS.FOYER));
    }
    actions.push(new ProtoAction(TYPE_ACTION.RECOLTE, 'Récolter'));
    actions.push(new ProtoAction(TYPE_ACTION.EXPLORATION, 'Explorer les alentours'));
    switch (meeple.position.celluleType) {
      case TYPE_CELLULE.FORET:
        actions.push(new ProtoAction(TYPE_ACTION.RECOLTE, 'bosser'));
        break;
      case TYPE_CELLULE.PLAINE:
        actions.push(new ProtoAction(TYPE_ACTION.RECOLTE, 'bosser'));
        break;

    }
    return actions;
  }
}
