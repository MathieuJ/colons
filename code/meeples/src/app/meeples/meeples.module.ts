import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';
import { RouterModule, Routes } from '@angular/router';
import { TerrainComponent } from './terrain/terrain.component';
import { CelluleComponent } from './cellule/cellule.component';
import { PartieComponent } from './partie/partie.component';
import { MeepleComponent } from './meeple/meeple.component';
import { MeepleInfosComponent } from './meeple-infos/meeple-infos.component';
import { NgModule } from '@angular/core';

const ROUTES: Routes = [
  {
    path: '',
    component: StartComponent
  }
];

@NgModule({
  declarations: [StartComponent, TerrainComponent, CelluleComponent, PartieComponent, MeepleComponent, MeepleInfosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class MeeplesModule { }
