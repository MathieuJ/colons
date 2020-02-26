import { Component, OnInit, Input, ViewEncapsulation, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { Cellule, CelluleType } from '../domain/cellule';
import { MessageService } from '../message.service';
import { Message, MessageType, TargetType } from '../domain/message';
import { Meeple } from '../domain/meeple';
import { MeeplePartieService } from '../partie.service';

@Component({
  selector: 'app-cellule',
  templateUrl: './cellule.component.html',
  styleUrls: ['./cellule.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CelluleComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes sur la cellule " + this.cellule.x + " " + this.cellule.y + " " + changes);
  }
  @Input()
  cellule: Cellule;

  CelluleType: CelluleType;

  constructor(private partieService: MeeplePartieService) {}

  ngOnInit() {
    console.log("on init", this.cellule);
  }
  select() {
    console.log("select C");
    
    this.partieService.selectCellule(this.cellule);
  } 
  selectMeeple(event: Event, meeple: Meeple) {
    console.log("select M");
    event.stopPropagation();
    this.partieService.selectMeeple(meeple);
  }
}
