import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { LyDialog } from '@alyle/ui/dialog';
import { ImgCropperEvent } from '@alyle/ui/image-cropper';

import { CropperDialogComponent } from '../cropper-dialog/cropper-dialog.component';

@Component({
  selector: 'aui-cropper-with-dialog',
  templateUrl: './cropper-with-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CropperWithDialogComponent {
  cropped?: string;
  constructor(
    private _dialog: LyDialog,
    private _cd: ChangeDetectorRef
  ) { }

  openCropperDialog(event: Event) {
    this.cropped = null!;
    this._dialog.open<CropperDialogComponent, Event>(CropperDialogComponent, {
      data: event,
      width: 320,
      disableClose: true
    }).afterClosed.subscribe((result?: ImgCropperEvent) => {
      if (result) {
        this.cropped = result.dataURL;
        this._cd.markForCheck();
      }
    });
  }
}
