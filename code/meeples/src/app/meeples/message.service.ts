import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from './domain/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private channel = new Subject<Message>();

  constructor() {}

  sendMessage(message: Message) {
    this.channel.next(message);
  }

  getChannel() {
    return this.channel.asObservable()
  }
}
