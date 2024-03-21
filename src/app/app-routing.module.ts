import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContentComponent } from './views/home-content/home-content.component';
import { SessionGameComponent } from './views/session-game/session-game.component';
import { WordstemsComponent } from './views/wordstems/wordstems.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full',
},
  {
    path: 'home',
    loadChildren: () => import('../app/views/home/home.module').then(m => m.HomeModule),
    //canActivate: [loginGuard]
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
