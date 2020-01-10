import { Component, OnInit, Input } from '@angular/core';
import { Cellule } from '../domain/cellule';
import { MessageService } from '../message.service';

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
    this.ms.sendMessage( this.cellule );
  } 
}
