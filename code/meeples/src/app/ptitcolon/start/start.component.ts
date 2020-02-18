import { Component, OnInit } from '@angular/core';
import { Partie } from '../domain/partie';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  state: 'INIT' | 'PLAY' | 'END';
  culture = false;
  elevage = false;
  mine = false;
  peche = true;

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
