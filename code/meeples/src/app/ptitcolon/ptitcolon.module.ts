import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';
import { PartieComponent } from './partie/partie.component';
import { ElevageComponent } from './elevage/elevage.component';
import { CultureComponent } from './culture/culture.component';
import { MineComponent } from './mine/mine.component';
import { PecheComponent } from './peche/peche.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BotComponent } from './bot/bot.component';
import { CoutComponent } from './cout/cout.component';


const ROUTES: Routes = [
  {
    path: '',
    component: StartComponent
  }
];

@NgModule({
  declarations: [StartComponent, 
    PartieComponent, 
    ElevageComponent, 
    CultureComponent, MineComponent, PecheComponent, BotComponent, 
    CoutComponent],
  imports: [
    CommonModule,
    FormsModule, 
    RouterModule.forChild(ROUTES)
  ]
})
export class PtitcolonModule { }
