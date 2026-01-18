import { Component, Input, OnInit } from '@angular/core';
import { Chat } from "../chat/chat";
import { NgFor } from '@angular/common';
import { ChatMessage } from '../chat-message.model';
import { ChatApiService } from '../../services/chat-api.service';

@Component({
  selector: 'app-chats',
  imports: [Chat, NgFor],
  templateUrl: './chats.html',
  styleUrl: './chats.css',
})
export class Chats implements OnInit {
  
  @Input() chats: ChatMessage[] = [];
  history: ChatMessage[] = [];
  
  constructor(private chatserviceApi: ChatApiService){}

  ngOnInit(): void {

  }

  onLoad(){
    this.chatserviceApi.getChats().subscribe((data) => {
      this.history = data as ChatMessage[];
    });
  }


}