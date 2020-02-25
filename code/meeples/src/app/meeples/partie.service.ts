import { Injectable } from '@angular/core';
import { MessageService } from 'src/app/meeples/message.service';
import { Message, MessageType, TargetType } from 'src/app/meeples/domain/message';
import { Partie, Carte, SelectedElement } from 'src/app/meeples/domain/partie';
import { Batiment } from 'src/app/meeples/domain/batiment';
import { HexaCellule } from 'src/app/meeples/domain/hexaTerrain';
import { Meeple } from './domain/meeple';
import { Cellule, CelluleType, TYPE_ACTION, ActionMeeples } from './domain/cellule';

@Injectable({
  providedIn: 'root'
})
export class MeeplePartieService {
  partie: Partie;
  selectedElement: SelectedElement = { type: TargetType.NONE };
  
  executeAction(arg0: any, arg1: any): any {
    console.log("action", arg0, arg1);
  }

  
  constructor(private messageService: MessageService) {
    this.partie = new Partie();
  }

  getPartie() {
    return this.partie;
  }

  unselect() {
    this.selectedElement.type = TargetType.NONE;
    if (this.selectedElement.meeple) {
      this.selectedElement.meeple.selected = false;
      this.selectedElement.meeple = undefined;
    }
    if (this.selectedElement.cellule) {
      this.selectedElement.cellule.selected = false;
      this.selectedElement.cellule = undefined;
    }
  }

  selectCellule(cellule: Cellule) {
    if (this.selectedElement.meeple) {
      this.getPartie().sendMeeple(this.selectedElement.meeple, cellule);
      this.messageService.sendMessage(new Message(MessageType.MOVE, cellule));
      this.unselect();
      this.messageService.sendMessage(new Message(MessageType.SELECT, this.selectedElement));
    } else {
      this.unselect();
      this.selectedElement = { type: TargetType.CELLULE, cellule };
      cellule.selected = true;
      this.messageService.sendMessage(new Message(MessageType.SELECT, this.selectedElement));
    }
  }

  selectMeeple(meeple: Meeple) {
    this.unselect();
    meeple.selected = true;
    this.selectedElement = { type: TargetType.MEEPLE, meeple };
    this.messageService.sendMessage(new Message(MessageType.SELECT, this.selectedElement));
  }

  getActionsPossibles(meeple: Meeple) {
    const cellule = meeple.position;
    const actions: { type_action: TYPE_ACTION, description: string }[] = [];
    if (cellule.batiment) {
      // switch (cellule.batiment.proto) {
      actions.push({ type_action: TYPE_ACTION.TRAVAIL, description : 'bosser'});
      // }
    } else {
      actions.push({ type_action: TYPE_ACTION.CONSTRUCTION, description : 'construire un bâtiment'});
    }
    actions.push({ type_action: TYPE_ACTION.RECOLTE, description : 'Récolter'});
    actions.push({ type_action: TYPE_ACTION.EXPLORATION, description : 'Explorer les alentours'});
    switch (meeple.position.celluleType) {
      case CelluleType.FORET:
        actions.push({ type_action: TYPE_ACTION.RECOLTE, description : 'bosser'});
        break;
      case CelluleType.PLAINE:
        actions.push({ type_action: TYPE_ACTION.RECOLTE, description : 'bosser'});
        break;

    }
    return actions;
  }
}
