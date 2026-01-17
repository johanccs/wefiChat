import { Component, Input } from '@angular/core';
import { ChatUser } from '../chat-user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  @Input({ required: true }) user!: ChatUser;
}
