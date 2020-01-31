import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'start',
    loadChildren: './meeples/meeples.module#MeeplesModule'
  },
  {
    path: 'start2',
    loadChildren: './ptitcolon/ptitcolon.module#PtitcolonModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
