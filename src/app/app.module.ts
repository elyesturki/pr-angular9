import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { GrandChildComponent } from './grand-child/grand-child.component';
import { ColorComponent } from './color/color.component';
import { FormsModule } from '@angular/forms';
import { FilsComponent } from './fils/fils.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildAComponent,
    ChildBComponent,
    GrandChildComponent,
    ColorComponent,
    FilsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
