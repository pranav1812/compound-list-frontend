import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Pages/home/home.component';
import { DetailComponent } from './Pages/detail/detail.component';
import { ErrorComponent } from './Pages/error/error.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'details/:id', component: DetailComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
