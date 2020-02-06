import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PtitColonService {
  private channel = new Subject<string>();

  private counter = 0;

  constructor() {}

  sendMessage(message: string) {
    this.handleMessage();
  }

  getChannel() {
    return this.channel.asObservable();
  }

  handleMessage() {
    this.counter++;
    if (this.counter % 3 == 0) {
       this.channel.next("" + this.counter);
    }
  }
}
