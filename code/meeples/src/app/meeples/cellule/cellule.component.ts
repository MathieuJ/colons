import { Component, OnInit, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Cellule, CelluleType } from '../domain/cellule';
import { MessageService } from '../message.service';
import { Message, MessageType, TargetType } from '../domain/message';
import { Meeple } from '../domain/meeple';
import { MeeplePartieService } from '../partie.service';

@Component({
  selector: 'app-cellule',
  templateUrl: './cellule.component.html',
  styleUrls: ['./cellule.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CelluleComponent implements OnInit {
  @Input()
  cellule: Cellule;

  CelluleType: CelluleType;
  
  constructor(private partieService: MeeplePartieService) {}

  ngOnInit() {
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
