import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {
  dashboardLink: string = "/"
  sessiongame: string = 'session-game';
  wordstems: string = 'wordstems';
  sources: string = 'sources';
}
