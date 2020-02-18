import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Peche } from 'src/app/ptitcolon/domain/partie';

@Component({
  selector: 'app-peche',
  templateUrl: './peche.component.html',
  styleUrls: ['./peche.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PecheComponent implements OnInit {
  @Input()
  peche: Peche;

  constructor() { }

  ngOnInit() {
    this.peche.lanceDes();
  }

}
