import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cvTech/cv/cv.component';
import { ColorComponent } from './color/color.component';
import { DetailComponent } from './cvTech/detail/detail.component';

const APP_ROUTING: Routes = [
  { path: '', redirectTo: 'cv', pathMatch: 'full'},
  { path: 'cv', component: CvComponent },
  { path: 'cv/:id', component: DetailComponent },
  { path: 'color/:default', component: ColorComponent }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(APP_ROUTING)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
