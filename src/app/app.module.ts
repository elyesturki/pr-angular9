import { LoginGuard } from './guard/login.guard';
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
import { AddCvComponent } from './cvTech/add-cv/add-cv.component';
import { DeleteCvComponent } from './cvTech/delete-cv/delete-cv.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { ObservableComponent } from './observable/observable.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpComponent } from './http/http.component';
import { loginInterceptor } from './interceptors/login.interceptor';
import { LogoutGuard } from './guard/logout.guard';
import { UpdateCvComponent } from './cvTech/update-cv/update-cv.component';
import { SearchComponent } from './cvTech/search/search.component';
import { CropperDialogComponent } from './cropperModule/cropper-dialog/cropper-dialog.component';
import { CropperWithDialogComponent } from './cropperModule/cropper-with-dialog/cropper-with-dialog.component';

/*cropper module*/
import { CropperWithDialogModule } from './cropperModule/cropper-with-dialog.module'
/** Import animations */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Gestures
import {
  HAMMER_GESTURE_CONFIG,
  HammerModule
} from '@angular/platform-browser';

/** Import Alyle UI */
import {
  LyTheme2,
  StyleRenderer,
  LY_THEME,
  LY_THEME_NAME,
  LyHammerGestureConfig
} from '@alyle/ui';

/** Import the component modules */
import { LyButtonModule } from '@alyle/ui/button';
import { LyToolbarModule } from '@alyle/ui/toolbar';
import { LyImageCropperModule } from '@alyle/ui/image-cropper';
/** Import themes */
import { MinimaLight, MinimaDark } from '@alyle/ui/themes/minima';
/*end crop module */

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
    ErrorComponent,
    LoginComponent,
    ObservableComponent,
    HttpComponent,
    UpdateCvComponent,
    SearchComponent,
    CropperDialogComponent,
    CropperWithDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AutocompleteLibModule,
    AppRoutingModule,
    HttpClientModule,
    CropperWithDialogModule,
    BrowserAnimationsModule,
    LyButtonModule,
    LyToolbarModule,
    LyImageCropperModule,
    HammerModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: loginInterceptor, multi: true },
    LoginGuard,
    LogoutGuard,
    [ LyTheme2 ],
    [ StyleRenderer ],
    { provide: LY_THEME_NAME, useValue: 'minima-light' },
    { provide: LY_THEME, useClass: MinimaLight, multi: true }, // name: `minima-light`
    { provide: LY_THEME, useClass: MinimaDark, multi: true }, // name: `minima-dark`
    { provide: HAMMER_GESTURE_CONFIG, useClass: LyHammerGestureConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
