import { Component, OnInit, Input } from '@angular/core';
import { Cellule } from '../domain/cellule';
import { MessageService } from '../message.service';
import { Message, MessageType, TargetType } from '../domain/message';

@Component({
  selector: 'app-cellule',
  templateUrl: './cellule.component.html',
  styleUrls: ['./cellule.component.scss']
})
export class CelluleComponent implements OnInit {
  @Input()
  cellule: Cellule;

  constructor(private ms:MessageService) {}

  ngOnInit() {
  }
  select() {
    console.log("select", this.cellule);
    this.ms.sendMessage(new Message(MessageType.SELECT, '', TargetType.CELLULE, this.cellule));
  } 
}
