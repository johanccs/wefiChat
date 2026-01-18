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

  joinChannel(channel: string){
    this.hubConnection.invoke('JoinChannel', channel)
    .catch(err => console.error("Error joining group: " + err));
  }

  sendDirectChat(channel: string, user: string, message: string){
    this.hubConnection.invoke("SendChatToChannel", channel, user, message)
      .catch(err => console.error(err));
  }

  sendChat(user: string, message: string, channel: string){
    this.hubConnection.invoke('SendChat', user, message, channel)
      .catch(err => console.log(err));
  }

  receiveChatEventListener(callback: (user: string, message: string, channel: string) => void) {
    this.hubConnection.on("ReceiveChat", callback);
  };

}
