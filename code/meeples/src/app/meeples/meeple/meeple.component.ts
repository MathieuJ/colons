import { Component, OnInit, Input } from '@angular/core';
import { Meeple } from '../domain/meeple';

@Component({
  selector: 'app-meeple',
  templateUrl: './meeple.component.html',
  styleUrls: ['./meeple.component.scss']
})
export class MeepleComponent implements OnInit {
  @Input() 
  meeple: Meeple;
  
  constructor() { }

  ngOnInit() {
  }

}
