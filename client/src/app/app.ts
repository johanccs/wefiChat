import { Component, signal } from '@angular/core';
import { Home } from "./home/home";
import { MainNav } from "./nav/main-nav/main-nav";

@Component({
  selector: 'app-root',
  imports: [Home, MainNav],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('wefi-chat-client');
}
