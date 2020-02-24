import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Meeple } from 'src/app/meeples/domain/meeple';
import { CelluleType } from 'src/app/meeples/domain/cellule';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
import { MeeplePartieService } from 'src/app/meeples/partie.service';

@Component({
  selector: 'app-meeple-infos',
  templateUrl: './meeple-infos.component.html',
  styleUrls: ['./meeple-infos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MeepleInfosComponent implements OnInit, OnChanges {
  
  @Input()
  meeple: Meeple;
  CelluleType = CelluleType;

  actions: any[];

  constructor(private partieService: MeeplePartieService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes de meeple");
    console.log(changes);
    this.actions = this.partieService.getActionsPossibles(this.meeple);

  }
  doAction(action) {
    console.log("action");
    this.partieService.executeAction(this.meeple, action);
  }
}
