import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./home/home";
import { MainNav } from "./nav/main-nav/main-nav";
import { FooterNav } from "./nav/footer-nav/footer-nav";

@Component({
  selector: 'app-root',
  imports: [Home, MainNav, FooterNav],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('wefi-chat-client');
}
