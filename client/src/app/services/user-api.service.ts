import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChatUser } from '../user-component/chat-user.model';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {

  private serverApi = 'http://localhost:5000/api'

  constructor(private httpClient: HttpClient) { }

  getUsers() {

    const url = `${this.serverApi}/user`;

    return this.httpClient.get(url);

  }

  getUserByName(name: string){
    const url = `${this.serverApi}/user/search/${name}`;

    return this.httpClient.get(url);
  }

  addUser(user: ChatUser) {
    const url = `${this.serverApi}/user`;

    return this.httpClient.post(url, user);
  }

  deleteUser(id: number) {
    const url = `${this.serverApi}/user/${id}`;

    return this.httpClient.delete(url);
  }

}
