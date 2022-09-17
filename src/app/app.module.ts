import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestPageComponent } from './components/pages/test-page/test-page.component';
import { NavbarComponent } from './components/utils/navbar/navbar.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CsvReaderPageComponent } from './components/pages/csv-reader-page/csv-reader-page.component';
import { SwCardComponent } from './components/ui/sw-card/sw-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TestPageComponent,
    NavbarComponent,
    HomePageComponent,
    CsvReaderPageComponent,
    SwCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
