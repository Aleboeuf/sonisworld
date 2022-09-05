import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestPageComponent } from './components/pages/test-page/test-page.component';
import { NavbarComponent } from './components/utils/navbar/navbar.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TestPageComponent,
    NavbarComponent,
    HomePageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
