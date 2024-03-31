import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, OnSameUrlNavigation, Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-theme-game',
  templateUrl: './theme-game.component.html',
  styles: ``
})
export class ThemeGameComponent{

  setWordtheme(value: string) {
    sessionStorage.setItem("wordtheme", value);
  }

  sessiongame: string = 'session';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertService
  ) {}


}


