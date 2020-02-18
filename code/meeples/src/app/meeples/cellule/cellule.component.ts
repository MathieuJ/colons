import { Component, OnInit, Input } from '@angular/core';
import { Cellule } from '../domain/cellule';
import { MessageService } from '../message.service';
import { Message, MessageType, TargetType } from '../domain/message';
import { Meeple } from '../domain/meeple';
import { MeeplePartieService } from '../partie.service';

@Component({
  selector: 'app-cellule',
  templateUrl: './cellule.component.html',
  styleUrls: ['./cellule.component.scss']
})
export class CelluleComponent implements OnInit {
  @Input()
  cellule: Cellule;

  constructor(private partieService: MeeplePartieService) {}

  ngOnInit() {
  }
  select() {
    console.log("select C", this.cellule);

    this.partieService.selectCellule(this.cellule);
  } 
  selectMeeple(event: Event, meeple: Meeple) {
    event.stopPropagation();
    console.log("select M", this.cellule);
    this.partieService.selectCellule(this.cellule);
  }
}
