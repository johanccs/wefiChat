import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  getActiveUser() {

    return localStorage.getItem('activeUser');
    
  }

  getActiveChannel() {

    return localStorage.getItem('activeChannel');

  }

  setActiveUser(activeUser: string){
    return localStorage.setItem('activeUser', activeUser);
  }

  setActiveChannel(activeChannel: string ){
    localStorage.setItem('activeChannel', activeChannel);
  }

  clearTokens(){
    localStorage.removeItem('activeChannel');
    localStorage.removeItem('activeUser');
  }

}
