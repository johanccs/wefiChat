import { Component, Input } from '@angular/core';
import { ChatMessage } from '../chat-message.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-chat',
  imports: [DatePipe],
  templateUrl: './chat.html',
  styleUrl: './chat.css',
})
export class Chat {

  @Input({ required: true }) chat!: ChatMessage;

}
