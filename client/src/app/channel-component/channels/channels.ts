import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChannelModel } from '../channel.model';
import { Channel } from '../channel/channel';
import { FormsModule } from '@angular/forms';
import { ChannelApiService } from '../../services/channel-api.service';

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
    
    this.channelService.getChannels().subscribe(data => {
      this.channels = data as ChannelModel[];
    });

  }

  constructor(private channelService: ChannelApiService){}

  addChannel(){
    if(!this.channelName) return;

    this.channelService.addChannel(new ChannelModel({name: this.channelName})).subscribe(data => {
      this.channels.push(new ChannelModel({id: 3, name: this.channelName}));
      
    });

    this.modalElement.nativeElement.close();
  }

  onDeleteChannel(id: number){
    this.channels = this.channels.filter(channel => channel.id !== id);
    this.channelService.deleteChannel(id).subscribe(data => {
    });
  }

}
