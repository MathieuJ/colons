import { Component, OnInit, Input, ViewEncapsulation, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { Cellule, TYPE_CELLULE } from '../domain/cellule';
import { MessageService } from '../message.service';
import { Message, MessageType, TYPE_TARGET } from '../domain/message';
import { Meeple } from '../domain/meeple';
import { MeeplePartieService } from '../partie.service';
import { HexaCellule } from 'src/app/meeples/domain/hexaTerrain';

@Component({
  selector: 'app-cellule',
  templateUrl: './cellule.component.html',
  styleUrls: ['./cellule.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CelluleComponent implements OnInit {
  /*ngOnChanges(changes: SimpleChanges): void {
    console.log("changes sur la cellule " + this.cellule.x + " " + this.cellule.y + " " + changes);
  }*/
  @Input()
  cellule: HexaCellule;

  TYPE_CELLULE = TYPE_CELLULE;

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
