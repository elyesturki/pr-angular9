import { Component, OnInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { LyDialog } from '@alyle/ui/dialog';
import { ImgCropperEvent } from '@alyle/ui/image-cropper';

import { CropperDialog } from './cropper-dialog';

@Component({
  selector: 'app-resize-crop-img',
  templateUrl: './resize-crop-img.component.html',
  styleUrls: ['./resize-crop-img.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResizeCropImgComponent {
  cropped?: string;
  constructor(
    private _dialog: LyDialog,
    private _cd: ChangeDetectorRef
  ) { }

  openCropperDialog(event: Event) {
    this.cropped = null!;
    this._dialog.open<CropperDialog, Event>(CropperDialog, {
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
