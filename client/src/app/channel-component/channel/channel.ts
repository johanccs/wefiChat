import { Component, Input } from '@angular/core';
import { ChannelModel } from '../channel.model';

@Component({
  selector: 'app-channel',
  imports: [],
  templateUrl: './channel.html',
  styleUrl: './channel.css',
})
export class Channel {
 
  @Input({required: true}) channel!: ChannelModel;

}
