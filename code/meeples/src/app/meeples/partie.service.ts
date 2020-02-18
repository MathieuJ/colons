import { Injectable } from '@angular/core';
import { MessageService } from 'src/app/meeples/message.service';
import { Message, MessageType, TargetType } from 'src/app/meeples/domain/message';
import { Partie, Carte, SelectedElement } from 'src/app/meeples/domain/partie';
import { Batiment, TypeBatiment } from 'src/app/meeples/domain/batiment';
import { HexaCellule } from 'src/app/meeples/domain/hexaTerrain';
import { Meeple } from './domain/meeple';
import { Cellule } from './domain/cellule';

@Injectable({
  providedIn: 'root'
})
export class MeeplePartieService {
  partie: Partie;

  selectedElement: SelectedElement = { type: TargetType.NONE };
  
  constructor(private messageService: MessageService) {
    this.partie = new Partie();
  }

  getPartie() {
    return this.partie;
  }

  unselect() {
    if (this.selectedElement.meeple) {
      this.selectedElement.meeple.selected = false;
    }
    if (this.selectedElement.cellule) {
      this.selectedElement.cellule.selected = false;
    }
  }

  selectCellule(cellule: Cellule) {
    if (this.selectedElement.meeple) {
      console.log("move");
      this.getPartie().sendMeeple(this.selectedElement.meeple, cellule);
      this.messageService.sendMessage(new Message(MessageType.MOVE, cellule));
    } else {
      this.unselect();
      this.selectedElement = { type: TargetType.CELLULE, cellule: cellule };
      cellule.selected = true;
      this.messageService.sendMessage(new Message(MessageType.SELECT, this.selectedElement));
    }
  }

  selectMeeple(meeple: Meeple) {
    console.log("select meeple");
      this.unselect();
      meeple.selected = true;
      this.selectedElement = { type: TargetType.MEEPLE, meeple };
      this.messageService.sendMessage(new Message(MessageType.SELECT, this.selectedElement));
    
  }
}
