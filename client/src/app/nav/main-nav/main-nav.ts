import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { UserApiService } from '../../services/user-api.service';
import { ChatUser } from '../../user-component/chat-user.model';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-main-nav',
  imports: [FormsModule],
  templateUrl: './main-nav.html',
  styleUrl: './main-nav.css',
})
export class MainNav implements OnInit {

  @ViewChild('modal') modalElementRef!: ElementRef<HTMLDialogElement>;

  constructor(
    private userService: UserService, 
    private userApiService: UserApiService, 
    private chatService: ChatService){}
  
  isLoggedIn = false;
  isRegisteringNewUser = false;

  modalTitle = 'Login';
  modalButtonText = 'Login';

  user = '';
  activeUser = '';
  channel!: string;
  
  ngOnInit(): void {
    
    this.user = this.userService.getActiveUser() ?? '';
    this.channel = this.userService.getActiveChannel() ?? '';

    if(this.user && this.channel){
      this.isLoggedIn = true;
      this.activeUser = this.user;
    }
  }

  onRegister(){
    this.isRegisteringNewUser = true;
    this.modalTitle = 'New User';
    this.modalButtonText = 'Register';
    
    this.modalElementRef.nativeElement.showModal();
  }

  onLogout(){
    this.isLoggedIn = !this.isLoggedIn;
    this.userService.clearTokens();
  }

  onLogin(){

    this.user = '';
    this.channel = '';
    this.modalTitle = 'Login';
    this.isRegisteringNewUser = false;
    this.modalElementRef.nativeElement.showModal();
  }

  onClick(){

    // This section will allow user to log in
    if(!this.isRegisteringNewUser) {

      this.userApiService.getUserByName(this.user).subscribe({
        next: (response) => {
          this.isLoggedIn = !this.isLoggedIn;
          this.userService.setActiveChannel(this.channel);
          this.userService.setActiveUser(this.user);
          this.activeUser = this.user;

          this.chatService.joinChannel(this.channel);
        },
        error: (err) => {
          this.isLoggedIn = false;
          alert(`${ err.error.errorMessage }. Please use existing user`);
        }
      });


    } else {
      this.isRegisteringNewUser = !this.isRegisteringNewUser;
      this.userApiService.addUser(new ChatUser({name: this.user})).subscribe({
        next: (response) => {
          console.log("User registered successfully");
        },
        error: (err) => {
          alert(`${err.error.errorMessage} : ${err.error.param}`);
        }
      })
    }
    
    this.modalElementRef.nativeElement.close();
  }

}
