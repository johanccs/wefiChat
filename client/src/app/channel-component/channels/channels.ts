import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChannelModel } from '../channel.model';
import { Channel } from '../channel/channel';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-channels',
  imports: [Channel, FormsModule],
  templateUrl: './channels.html',
  styleUrl: './channels.css',
})
export class Channels implements OnInit {
  
  channels: ChannelModel[] = [];
  channelName!: string;
  @ViewChild('modal') modalElement!: ElementRef<HTMLDialogElement>;
  
  ngOnInit(): void {
    this.channels.push(
      new ChannelModel({ id: 1, name: 'Accounting'}), 
      new ChannelModel({ id: 2, name: 'Dev' }));
  }

  addChannel(){
    if(!this.channelName) return;

    this.channels.push(new ChannelModel({id: 3, name: this.channelName}));

    this.modalElement.nativeElement.close();
    console.log(this.channels);
  }

  

}
