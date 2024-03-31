import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent implements OnInit {

  dashboardLink: string = "/"
  sessiongame: string = 'game';
  wordstems: string = 'wordstems';
  sources: string = 'sources';
  profil: string = 'userprofile';
  leaderboard: string = 'leaderboard';

  //constructor argument picked out
  //private authService: AuthService,
  constructor( private router: Router) { }

  ngOnInit(): void {

  }

  logout() {
    
    Swal.fire({
      title: 'voulez vous vraiment vous déconnecter?',
      text: 'vous allez perdre votre session!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#0d6efd',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, Poursuivre',
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        //this.authService.logout();
        //this.router.navigateByUrl('/public/login');
      }
    });
  }

}
