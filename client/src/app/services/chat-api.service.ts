import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatMessage } from '../chat-component/chat-message.model';

@Injectable({
  providedIn: 'root',
})
export class ChatApiService {
  
  private serverApi = 'http://localhost:5000/api'

  constructor(private httpClient: HttpClient){}

  getChats() {

    const url = `${this.serverApi}/chat`;

    return this.httpClient.get(url);

  }

}
