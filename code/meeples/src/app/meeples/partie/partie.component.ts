import { Component, OnInit, Input } from '@angular/core';
import { Partie } from '../domain/partie';
import { MessageService } from '../message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-partie',
  templateUrl: './partie.component.html',
  styleUrls: ['./partie.component.scss']
})
export class PartieComponent implements OnInit {
  @Input()
  partie: Partie;
  subs: Subscription;
  
  constructor(private ms:MessageService) {
    this.subs = this.ms.getChannel().subscribe(this.onMessage);
  }

  ngOnInit() {
  }

  onMessage(s: any) {
    console.log("message", s);
  }
}
