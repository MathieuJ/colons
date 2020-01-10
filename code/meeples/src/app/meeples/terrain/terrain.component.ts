import { Component, OnInit, Input } from '@angular/core';
import { Terrain } from '../domain/cellule';

@Component({
  selector: 'app-terrain',
  templateUrl: './terrain.component.html',
  styleUrls: ['./terrain.component.scss']
})
export class TerrainComponent implements OnInit {
  @Input()
  terrain: Terrain;
  
  constructor() { }

  ngOnInit() {
  }

}


