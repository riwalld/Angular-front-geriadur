import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProperName } from 'src/app/models/ProperName';
import { ProperNounsService } from 'src/app/services/ProperNouns.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styles: ``
})
export class HomeContentComponent implements OnInit {
  nouns: ProperName[] = [];
  isLoading!: boolean;

  constructor(
    private router: Router,
    private properNounsService: ProperNounsService,
    private alert: AlertService
  ) {}
  
  ngOnInit(): void {
    this.get3LastNouns();
  }

  get3LastNouns() {
    this.isLoading = true;
    this.properNounsService.getAll().subscribe(
      data => {
        this.nouns = data;
        this.isLoading = false;
      },
      (err) => {
        this.alert.alertError(err.error !== null ? err.error.message : 'Une erreur s\'est produite lors de la récupération des formateurs');
      }
    );
  }
}
