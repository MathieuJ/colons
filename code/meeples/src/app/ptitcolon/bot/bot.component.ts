import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Bot } from '../domain/partie';
import { PtitColonService } from '../ptitcolon.service';

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BotComponent implements OnInit {
  @Input()
  bot: Bot;
  
  constructor(private ptitColonService: PtitColonService) { }

  ngOnInit() {
  }
  lance() {
    this.ptitColonService.sendMessage("");
  }
}
