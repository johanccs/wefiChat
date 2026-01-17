import { Injectable } from '@angular/core';
import { ChatUser } from '../user-component/chat-user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private loggedInUser?: ChatUser;

  getLoggedInUser() {

    return this.loggedInUser = { id: 1, name: 'JP' };

  }

}
