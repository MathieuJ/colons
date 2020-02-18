import { Injectable } from '@angular/core';
import { MessageService } from 'src/app/meeples/message.service';
import { Message, MessageType, TargetType } from 'src/app/meeples/domain/message';
import { Partie } from 'src/app/meeples/domain/partie';
import { Batiment } from 'src/app/meeples/domain/batiment';
import { HexaCellule } from 'src/app/meeples/domain/hexaTerrain';

@Injectable({
  providedIn: 'root'
})
export class MeeplePartieService {
  partie: Partie;
  selectedElement: {
    type: TargetType;
    batiment?: Batiment;
    cellule?: HexaCellule;
    meeple?: Meeple;
    carte?: Carte;
    plan?: TypeBatiment;
  } = undefined;
  
  constructor(private messageService: MessageService) {
    this.partie = new Partie();
  }

  getPartie() {
    return this.partie;
  }

  selectCellule(cellule) {
    this.messageService.sendMessage(new Message(MessageType.SELECT, '', TargetType.CELLULE, cellule));
  }

  selectMeeple(meeple) {
    if (this.partie.)
    this.messageService.sendMessage(new Message(MessageType.SELECT, '', TargetType.MEEPLE, meeple));
  }
}
