import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ChampionsPageComponent } from './pages/champions-page/champions-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HeaderComponent } from './components/header/header.component';
import { TitleComponent } from './components/champions-page/title/title.component';
import { ChampionListComponent } from './components/champions-page/champion-list/champion-list.component';
@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    HomePageComponent,
    ChampionsPageComponent,
    NotFoundPageComponent,
    HeaderComponent,
    TitleComponent,
    ChampionListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
