import { Component, OnInit } from '@angular/core';
import { Partie } from '../domain/partie';
import { MeeplePartieService } from 'src/app/meeples/partie.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  partie: Partie;
  
  constructor(private partieService: MeeplePartieService) { 

  }

  ngOnInit() {
    this.partie = this.partieService.getPartie();
  }

}
