import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';
import { RouterModule, Routes } from '@angular/router';
import { TerrainComponent } from './terrain/terrain.component';
import { CelluleComponent } from './cellule/cellule.component';
import { PartieComponent } from './partie/partie.component';

const ROUTES: Routes = [
  {
    path: '',
    component: StartComponent
  }
];

@NgModule({
  declarations: [StartComponent, TerrainComponent, CelluleComponent, PartieComponent],
  imports: [
    CommonModule, 
    RouterModule.forChild(ROUTES)
  ]
})
export class MeeplesModule { }
