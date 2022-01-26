import {Component, Input, OnInit} from '@angular/core';
import {Arc} from "../objects/repo.service";

@Component({
  selector: 'app-arc',
  templateUrl: './arc.component.html',
  styleUrls: ['./arc.component.css']
})
export class ArcComponent implements OnInit {
  @Input()
  arc!: Arc;

  constructor() { }

  ngOnInit(): void {
  }

}
