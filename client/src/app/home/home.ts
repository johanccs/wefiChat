import { Component } from '@angular/core';
import { Channels } from "../channels/channels";
import { Users } from "../users/users";
import { Chats } from "../chats/chats";
import { MainNav } from "../nav/main-nav/main-nav";
import { Message } from "../message/message";
import { FooterNav } from "../nav/footer-nav/footer-nav";

@Component({
  selector: 'app-home',
  imports: [Channels, Users, Chats, MainNav, Message, FooterNav],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
