import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryListComponent } from './country-list/country-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'view-country', pathMatch: 'full' },
  { path: 'view-country', component: CountryListComponent },
 ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
