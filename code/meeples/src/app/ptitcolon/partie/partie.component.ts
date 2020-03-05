import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { PtitColonService } from '../ptitcolon.service';
import { Partie } from '../domain/partie';

@Component({
  selector: 'app-partie',
  templateUrl: './partie.component.html',
  styleUrls: ['./partie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartieComponent implements OnInit {
  @Input()
  partie: Partie;

  counter: string;

  constructor(private ptitColonService: PtitColonService) { 

  }

  ngOnInit() {
    this.ptitColonService.getChannel().subscribe(m => {
      console.log("ding");
      this.counter = m;
    })
  }

}
