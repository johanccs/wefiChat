import { Component, OnInit } from '@angular/core';
import { ChatUser } from '../chat-user.model';
import { User } from "../user/user";
import { UserApiService } from '../../services/user-api.service';

@Component({
  selector: 'app-users',
  imports: [User],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users implements OnInit {

  constructor(private userApiService: UserApiService){}  
  
  users: ChatUser[] = [];

  ngOnInit(): void {

    this.userApiService.getUsers().subscribe(data => {
      this.users = data as ChatUser[];
    });

  }
}
