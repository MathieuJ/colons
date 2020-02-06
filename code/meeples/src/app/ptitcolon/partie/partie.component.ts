import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Partie } from 'src/app/meeples/domain/partie';
import { PtitColonService } from '../ptitcolon.service';

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
