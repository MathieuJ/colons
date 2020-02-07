import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message, MessageType } from './domain/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private channel = new Subject<Message>();
  private channelSelected = new Subject<Message>();

  constructor() {}

  sendMessage(message: Message) {
    switch (message.messageType) {
      case MessageType.SELECT:
        this.channelSelected.next(message);
        break;
      default: 
        this.channel.next(message);
      break;
    }
  }

  getChannel() {
    return this.channel.asObservable()
  }

  getChannelSelected() {
    return this.channelSelected.asObservable()
  }
}
