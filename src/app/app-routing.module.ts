import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cvTech/cv/cv.component';
import { ColorComponent } from './color/color.component';
import { DetailComponent } from './cvTech/detail/detail.component';
import { DeleteCvComponent } from './cvTech/delete-cv/delete-cv.component';
import { AddCvComponent } from './cvTech/add-cv/add-cv.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';

const APP_ROUTING: Routes = [
  { path: 'cv', component: CvComponent, children : [
    { path: 'delete/:id', component: DeleteCvComponent },
    { path: 'add', component: AddCvComponent },
    { path: ':id', component: DetailComponent },
  ]},
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'cv', pathMatch: 'full'},
  { path: 'color/:default', component: ColorComponent },
  { path: '**', redirectTo: '404-notfound' },
  { path: '404-notfound', component: ErrorComponent },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(APP_ROUTING)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
