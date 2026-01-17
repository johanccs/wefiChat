import { Component, OnInit } from '@angular/core';
import { ChannelModel } from '../channel.model';
import { Channel } from '../channel/channel';

@Component({
  selector: 'app-channels',
  imports: [Channel],
  templateUrl: './channels.html',
  styleUrl: './channels.css',
})
export class Channels implements OnInit {
  
  channels: ChannelModel[] = [];
  
  ngOnInit(): void {
    this.channels.push(
      new ChannelModel({ id: 1, name: 'Accounting'}), 
      new ChannelModel({ id: 2, name: 'Dev' }));
  }


}
