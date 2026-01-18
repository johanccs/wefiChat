import { Component, OnInit } from '@angular/core';;
import { Message } from "../message/message";
import { Chats } from '../chat-component/chats/chats';
import { Users } from '../user-component/users/users';
import { Channels } from '../channel-component/channels/channels';
import { ChannelModel } from '../channel-component/channel.model';
import { ChatMessage } from '../chat-component/chat-message.model';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-home',
  imports: [Channels, Users, Chats, Message],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  selectChannelId: number = 0;
  chat?: ChatMessage;
  chats: ChatMessage[] = [];
  user?: string;
  message?: string;

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {

    this.selectChannelId = new ChannelModel().id;

    this.chatService.startConnection();
    this.chatService.receiveChatEventListener((user, message) => {
      this.chats.push({ id: 0, channelId: 1, date: new Date(), message: message, user: user })
    });
  }
}
