import { Component, OnInit, Input } from '@angular/core';
import { Cout } from 'src/app/meeples/domain/cout';

@Component({
  selector: 'app-cout',
  templateUrl: './cout.component.html',
  styleUrls: ['./cout.component.scss']
})
export class CoutComponent implements OnInit {
  @Input()
  cout: Cout;
  
  constructor() { }

  ngOnInit() {
  }

}
