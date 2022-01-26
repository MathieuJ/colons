import { Component } from '@angular/core';
import {Arc, Environment, RepoService} from "./objects/repo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jdrgen';
  mode = 'rien';
  arc: Arc | undefined;
  environments: Environment[];
  constructor(public repoService: RepoService) {
    this.environments = repoService.environments;
  }

  creer(n: number) {
    this.arc = this.repoService.createHistoire(this.repoService.environments[n])
    this.mode = 'projet';
  }
}
