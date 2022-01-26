import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RepoService} from "./objects/repo.service";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [RepoService]
})
export class AppRoutingModule {

}
