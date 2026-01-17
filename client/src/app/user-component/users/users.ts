import { Component, OnInit } from '@angular/core';
import { ChatUser } from '../chat-user.model';
import { User } from "../user/user";

@Component({
  selector: 'app-users',
  imports: [User],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users implements OnInit {

  users: ChatUser[] = [];


  ngOnInit(): void {

    this.users.push(
      new ChatUser({ id: 1, name: 'JP'}),
      new ChatUser({ id: 2, name: 'Allan'}),
    );

  }
}
