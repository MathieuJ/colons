import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { Meeple } from 'src/app/meeples/domain/meeple';
import { TYPE_CELLULE } from 'src/app/meeples/domain/cellule';
import { MeeplePartieService } from 'src/app/meeples/partie.service';
import { Action, TYPE_ACTION } from 'src/app/meeples/domain/action';

@Component({
  selector: 'app-meeple-infos',
  templateUrl: './meeple-infos.component.html',
  styleUrls: ['./meeple-infos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MeepleInfosComponent implements OnInit, OnChanges {

  @Input()
  meeple: Meeple;
  TYPE_CELLULE = TYPE_CELLULE;

  actions: any[];
  TYPE_ACTION = TYPE_ACTION;

  constructor(private partieService: MeeplePartieService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes de meeple");
    console.log(changes);
    if (this.meeple.action) {
      this.actions = this.partieService.getActionsPossibles(this.meeple);
    }

  }
  doAction(action: Action) {
    console.log("action");
    this.partieService.executeAction(this.meeple, action);
  }
}
