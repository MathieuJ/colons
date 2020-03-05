import { Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Partie, Carte, SelectedElement } from '../domain/partie';
import { MessageService } from '../message.service';
import { Subscription } from 'rxjs';
import { Batiment } from '../domain/batiment';
import { HexaCellule } from '../domain/hexaTerrain';
import { Meeple } from '../domain/meeple';
import { Message, MessageType, TYPE_TARGET } from '../domain/message';
import { MeeplePartieService } from '../partie.service';

@Component({
  selector: 'app-partie',
  templateUrl: './partie.component.html',
  styleUrls: ['./partie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartieComponent implements OnInit {
  @Input()
  partie: Partie;
  subs: Subscription;
  subs2: Subscription;

  TYPE_TARGET = TYPE_TARGET;

  logs: string[] = [];

  actions: any[];

  selectedElement: SelectedElement = undefined;

  getTitle() {
    console.log("get");
    return "title";
  }

  constructor(private ms: MessageService, private partieService: MeeplePartieService) {
    this.subs = this.ms.getChannel().subscribe((m) => this.onMessage(m));
    this.subs2 = this.ms.getChannelSelected().subscribe((m) => this.onMessageSelected(m));
    this.selectedElement = this.partieService.selectedElement;
  }

  ngOnInit() {
  }

  onMessageSelected(message: Message) {
    console.log("on msg selected", message);
    this.selectedElement = message.target;
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
