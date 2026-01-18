import { Component, Input, OnInit, Output } from '@angular/core';
import { ChatUser } from '../user-component/chat-user.model';
import { ChannelModel } from '../channel-component/channel.model';
import { UserService } from '../services/user.service';
import { ChatMessage } from '../chat-component/chat-message.model';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-message',
  imports: [FormsModule],
  templateUrl: './message.html',
  styleUrl: './message.css',
})
export class Message implements OnInit {

  @Input({ required: true }) channelId!: number;

  constructor(private userService: UserService, private chatService: ChatService) { }

  message!: string;
  user: ChatUser = new ChatUser();
  activeUser = '';
  chat: ChatMessage = new ChatMessage();

  ngOnInit(): void {

    this.activeUser = this.userService.getActiveUser() ?? '';
    this.chat = new ChatMessage();

  }

  onSend() {

    this.chat.channelId = this.channelId;
    this.chat.date = new Date();
    this.chat.message = this.message;
    this.chat.user = this.activeUser;

    this.chatService.sendChat(this.chat.user, this.message);
    this.message = '';
  }

}
