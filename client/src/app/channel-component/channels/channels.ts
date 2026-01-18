import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChannelModel } from '../channel.model';
import { Channel } from '../channel/channel';
import { FormsModule } from '@angular/forms';
import { ChannelApiService } from '../../services/channel-api.service';
import { UserService } from '../../services/user.service';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-channels',
  imports: [Channel, FormsModule],
  templateUrl: './channels.html',
  styleUrl: './channels.css',
})
export class Channels implements OnInit {
  
  channels: ChannelModel[] = [];
  channelName!: string;
  activeChannelName = '';
  isActiveChannelSet = false;

  @ViewChild('modal') modalElement!: ElementRef<HTMLDialogElement>;
  
  ngOnInit(): void {
    
    this.getChannels();

  }

  constructor(
    private channelService: ChannelApiService, 
    private userService: UserService, 
    private chatService: ChatService){}

  addChannel(){
    if(!this.channelName) return;

    this.channelService.addChannel(new ChannelModel({name: this.channelName})).subscribe(data => {
     this.getChannels();
    });

    this.modalElement.nativeElement.close();
  }

  getChannels(){
    this.channelService.getChannels().subscribe(data => {
      this.channels = data as ChannelModel[];
    });
  }

  onDeleteChannel(id: number){
    this.channels = this.channels.filter(channel => channel.id !== id);
    this.channelService.deleteChannel(id).subscribe(data => {
      alert(data);
    });
  }

  setActiveChannel(channelId: number){
    const activeChannel = this.channels.find(channel => channel.id === channelId);

    if(activeChannel){
      this.userService.setActiveChannel(activeChannel.name);
      this.activeChannelName = activeChannel.name;
      this.isActiveChannelSet = true;

      this.chatService.joinChannel(activeChannel.name);
      alert("Channel joined");
    }
  }

}
