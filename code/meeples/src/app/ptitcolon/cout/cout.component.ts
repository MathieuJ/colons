import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Cout } from 'src/app/meeples/domain/cout';

@Component({
  selector: 'app-cout',
  templateUrl: './cout.component.html',
  styleUrls: ['./cout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoutComponent implements OnInit {
  @Input()
  cout: Cout;
  
  constructor() { }

  ngOnInit() {
  }

}
