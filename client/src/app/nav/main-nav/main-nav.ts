import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-main-nav',
  imports: [FormsModule],
  templateUrl: './main-nav.html',
  styleUrl: './main-nav.css',
})
export class MainNav implements OnInit {

  @ViewChild('modal') modalElementRef!: ElementRef<HTMLDialogElement>;

  constructor(private userService: UserService){}
  
  isLoggedIn = false;
  
  user!: string;
  channel!: string;
  
  ngOnInit(): void {
    
    this.user = this.userService.getActiveUser() ?? '';
    this.channel = this.userService.getActiveChannel() ?? '';

    if(this.user && this.channel){
      this.isLoggedIn = true;
    }

  }

  onLogout(){
    this.isLoggedIn = !this.isLoggedIn;
    this.userService.clearTokens();
  }

  login(){
    this.isLoggedIn = !this.isLoggedIn;

    this.userService.setActiveChannel(this.channel);
    this.userService.setActiveUser(this.user);

    this.user = '';
    this.channel = '';

    this.modalElementRef.nativeElement.close();
  }

}
