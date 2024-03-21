
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeContentComponent } from '../home-content/home-content.component';
import { SessionGameComponent } from '../session-game/session-game.component';
import { WordstemsComponent } from '../wordstems/wordstems.component';
import { SourcesComponent } from 'src/app/sources/sources.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {path: '', component: HomeContentComponent},
      {path: 'session-game', component: SessionGameComponent},
      {path: 'wordstems', component: WordstemsComponent},
      {path: 'sources', component: SourcesComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
