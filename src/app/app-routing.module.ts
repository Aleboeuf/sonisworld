import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { TestPageComponent } from './components/pages/test-page/test-page.component';

const routes: Routes = [
  { path: 'homepage', component: HomePageComponent },
  { path: 'testpage', component: TestPageComponent },
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
