

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CropperWithDialogComponent } from './cropper-with-dialog/cropper-with-dialog.component';
import { CropperDialogComponent } from './cropper-dialog/cropper-dialog.component';

/*cropper module*/
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
import { LySliderModule } from '@alyle/ui/slider';
import { LyIconModule } from '@alyle/ui/icon';
import { LyDialogModule } from '@alyle/ui/dialog';
/*end crop module */

@NgModule({
  declarations: [
    CropperDialogComponent,
    CropperWithDialogComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    LyButtonModule,
    LyToolbarModule,
    LyImageCropperModule,
    FormsModule,
    HammerModule,
    LySliderModule,
    LyIconModule,
    LyDialogModule
  ],
  providers: [
    [ LyTheme2 ],
    [ StyleRenderer ],
    { provide: LY_THEME_NAME, useValue: 'minima-light' },
    { provide: LY_THEME, useClass: MinimaLight, multi: true }, // name: `minima-light`
    { provide: LY_THEME, useClass: MinimaDark, multi: true }, // name: `minima-dark`
    { provide: HAMMER_GESTURE_CONFIG, useClass: LyHammerGestureConfig }
  ],
  exports: [CropperWithDialogComponent]
})
export class CropperImageModule { }
