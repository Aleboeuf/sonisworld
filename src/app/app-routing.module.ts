import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { TestPageComponent } from './components/pages/test-page/test-page.component';
import { CsvReaderPageComponent } from './components/pages/csv-reader-page/csv-reader-page.component';

const routes: Routes = [
  { path: 'homepage', component: HomePageComponent },
  { path: 'testpage', component: TestPageComponent },
  { path: 'csvreaderpage', component: CsvReaderPageComponent },
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
