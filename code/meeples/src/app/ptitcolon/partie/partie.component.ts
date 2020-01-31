import { Component, OnInit, Input } from '@angular/core';
import { Partie } from 'src/app/meeples/domain/partie';

@Component({
  selector: 'app-partie',
  templateUrl: './partie.component.html',
  styleUrls: ['./partie.component.scss']
})
export class PartieComponent implements OnInit {
  @Input()
  partie: Partie;

  constructor() { }

  ngOnInit() {
    
  }

}
