import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
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
  subs2: Subscription;

  _TargetType = TargetType;

  logs: string[];

  selectedElement: {
    type: TargetType;
    batiment?: Batiment;
    cellule?: HexaCellule;
    meeple?: Meeple;
    carte?: Carte;
    plan?: TypeBatiment;
  } = undefined;

  truc = "ototo";
  
  constructor(private ms: MessageService,
    private changeDetectorRef: ChangeDetectorRef,) {
    this.subs = this.ms.getChannel().subscribe((m) => this.onMessage(m));
    this.subs2 = this.ms.getChannelSelected().subscribe((m) => this.onMessageSelected(m));
  }

  ngOnInit() {
  }

  onMessageSelected(message: Message) {
    console.log("on msg selected", message);
    switch(message.targetType) {
      case TargetType.NONE:
        this.selectedElement = undefined;
        break;
      case TargetType.MEEPLE:
        this.selectedElement = { type: TargetType.MEEPLE, meeple: message.target };
        break;
      case TargetType.CELLULE:
        this.selectedElement = { type: TargetType.CELLULE, cellule: message.target };
        break;
      default: 
        this.selectedElement = { type : TargetType.MEEPLE, meeple: new Meeple(3, "oijiojf", 3)}
        break;
    }
    console.log(this.selectedElement);
  }

  onMessage(message: Message) {
    switch (message.messageType) {
      case MessageType.LOG:
        this.log(message.target);
        break;
      default:
        break;
    }
  }

  public log(msg: string) {
    this.logs.push(msg);
  }
}
