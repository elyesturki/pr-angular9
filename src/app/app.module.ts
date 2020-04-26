import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { GrandChildComponent } from './grand-child/grand-child.component';
import { ColorComponent } from './color/color.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilsComponent } from './fils/fils.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { ListeCvComponent } from './cvTech/liste-cv/liste-cv.component';
import { ItemCvComponent } from './cvTech/item-cv/item-cv.component';
import { DetailCvComponent } from './cvTech/detail-cv/detail-cv.component';
import { StyleComponent } from './directive/style/style.component';
import { ClassComponent } from './directive/class/class.component';
import { HighlightDirective } from './directive/highlight.directive';
import { RainbowDirective } from './directive/rainbow.directive';
import { DefaultImagePipe } from './cvTech/default-image.pipe';
import { FormulaireComponent } from './form-validation/formulaire/formulaire.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { EmbaucheComponent } from './cvTech/embauche/embauche.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { DetailComponent } from './cvTech/detail/detail.component';
import { AddCvComponent } from './cvTeck/add-cv/add-cv.component';
import { DeleteCvComponent } from './cvTeck/delete-cv/delete-cv.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildAComponent,
    ChildBComponent,
    GrandChildComponent,
    ColorComponent,
    FilsComponent,
    CvComponent,
    ListeCvComponent,
    ItemCvComponent,
    DetailCvComponent,
    StyleComponent,
    ClassComponent,
    HighlightDirective,
    RainbowDirective,
    DefaultImagePipe,
    FormulaireComponent,
    EmbaucheComponent,
    HeaderComponent,
    DetailComponent,
    AddCvComponent,
    DeleteCvComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AutocompleteLibModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
