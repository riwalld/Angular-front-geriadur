import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './views/home/home.component';
import { LastNewsComponent } from './views/last-news/last-news.component';
import { HomeContentComponent } from './views/home-content/home-content.component';
import { SessionGameComponent } from './views/session-game/session-game.component';
import { WordstemsComponent } from './views/wordstems/wordstems.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/shared/header/header.component';
import { FooterComponent } from './views/shared/footer/footer.component';
import { SourcesComponent } from './sources/sources.component';


@NgModule({
  declarations: [
AppComponent,
    HomeComponent,
    LastNewsComponent,
    HomeContentComponent,
    SessionGameComponent,
    WordstemsComponent,
    HeaderComponent,
    FooterComponent,
    SourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
