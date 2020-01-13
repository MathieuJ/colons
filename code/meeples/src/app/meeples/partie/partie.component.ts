import { Component, OnInit, Input } from '@angular/core';
import { Partie, Carte } from '../domain/partie';
import { MessageService } from '../message.service';
import { Subscription } from 'rxjs';
import { Batiment, TypeBatiment } from '../domain/batiment';
import { HexaCellule } from '../domain/hexaTerrain';
import { Meeple } from '../domain/meeple';
import { Message, MessageType, TargetType } from '../domain/message';

@Component({
  selector: 'app-partie',
  templateUrl: './partie.component.html',
  styleUrls: ['./partie.component.scss']
})
export class PartieComponent implements OnInit {
  @Input()
  partie: Partie;
  subs: Subscription;

  logs: string[];

  selectedElement: {
    type: TargetType;
    batiment?: Batiment;
    cellule?: HexaCellule;
    meeple?: Meeple;
    carte?: Carte;
    plan?: TypeBatiment;
  } = undefined;

  constructor(private ms: MessageService) {
    this.subs = this.ms.getChannel().subscribe(this.onMessage);
  }

  ngOnInit() {
  }

  onMessage(message: Message) {
    switch (message.messageType) {
      case MessageType.SELECT:
        switch (message.targetType) {
          case TargetType.NONE:
            this.selectedElement = undefined;
            break;
          case TargetType.MEEPLE:
            this.selectedElement = { type: TargetType.MEEPLE, meeple: message.target };
            break;
          case TargetType.CELLULE:
            this.selectedElement = { type: TargetType.CELLULE, cellule: message.target };
            break;
        }
        break;
      case MessageType.LOG:
        this.log(message.target);
        break;
      default:
        this.log('unkown message :' + message);
        break;
    }
  }

  public log(msg: string) {
    this.logs.push(msg);
  }
}
