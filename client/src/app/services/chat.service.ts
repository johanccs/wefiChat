import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalR';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  
  private hubConnection!: signalR.HubConnection;

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5000/chatHub')
      .withAutomaticReconnect()
      .build();

      this.hubConnection
        .start()
        .then(() => console.log('Connection established'))
        .catch(err => console.error('Connection not established', err));
  }

  sendChat(user: string, message: string){
    this.hubConnection.invoke('SendChat', user, message)
      .catch(err => console.log(err));
  }

  receiveChatEventListener(callback: (user: string, message: string) => void) {
    this.hubConnection.on("ReceiveChat", callback);
  };

}
