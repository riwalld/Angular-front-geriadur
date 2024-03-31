import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './views/home/home.component';
import { HomeContentComponent } from './views/home-content/home-content.component';
import { SessionGameComponent } from './views/session-game/session-game.component';
import { WordstemsComponent } from './views/wordstems/wordstems.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/shared/header/header.component';
import { FooterComponent } from './views/shared/footer/footer.component';
import { SourcesComponent } from './sources/sources.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { ThemeGameComponent } from './views/theme-game/theme-game.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeContentComponent,
    SessionGameComponent,
    WordstemsComponent,
    HeaderComponent,
    FooterComponent,
    SourcesComponent,
    ThemeGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
