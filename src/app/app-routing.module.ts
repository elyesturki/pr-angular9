import { LoginGuard } from './guard/login.guard';
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
import { LogoutGuard } from './guard/logout.guard';

const APP_ROUTING: Routes = [
  { path: 'cv', children : [
    { path: '', component: CvComponent },
    { path: 'delete/:id', component: DeleteCvComponent, canActivate: [LoginGuard] },
    { path: 'add', component: AddCvComponent, canActivate: [LoginGuard] },
    { path: ':id', component: DetailComponent },
  ]},
  { path: 'login', component: LoginComponent, canActivate: [LogoutGuard] },
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
