import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChannelModel } from '../channel-component/channel.model';

@Injectable({
  providedIn: 'root',
})
export class ChannelApiService {
  
   private serverApi = 'http://localhost:5000/api'

  constructor(private httpClient: HttpClient){}

  getChannels() {

    const url = `${this.serverApi}/channel`;

    return this.httpClient.get(url);

  }

  addChannel(channel: ChannelModel){
    const url = `${this.serverApi}/channel`;

    return this.httpClient.post(url, channel);
  }

  deleteChannel(id: number){
    const url = `${this.serverApi}/channel/${id}`;

    return this.httpClient.delete(url);
  }

}
