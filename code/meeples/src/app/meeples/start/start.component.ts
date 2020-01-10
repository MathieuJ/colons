import { Component, OnInit } from '@angular/core';
import { Partie } from '../domain/partie';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  partie: Partie;
  
  constructor() { }

  ngOnInit() {
    this.partie = new Partie();
  }

}
