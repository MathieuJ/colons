import { Component, OnInit } from '@angular/core';
import { Partie } from '../domain/partie';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  state: 'INIT' | 'PLAY' | 'END';
  culture: boolean = false;
  elevage: boolean = false;
  mine: boolean = false;
  peche: boolean = false;

  partie: Partie;
  constructor() { 

  }

  ngOnInit() {
    this.state = 'INIT';
  }

  launch() {
    this.partie = new Partie(this.culture, this.elevage, this.mine, this.peche);
  }
}
