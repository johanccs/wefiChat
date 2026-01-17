import { Component, Input, OnInit } from '@angular/core';
import { Chat } from "../chat/chat";
import { NgFor } from '@angular/common';
import { ChatMessage } from '../chat-message.model';

@Component({
  selector: 'app-chats',
  imports: [Chat, NgFor],
  templateUrl: './chats.html',
  styleUrl: './chats.css',
})
export class Chats implements OnInit {

  ngOnInit(): void {
    console.log(this.chats);
  }

  @Input() chats: ChatMessage[] = [];

}