import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { LyDialog } from '@alyle/ui/dialog';
import { ImgCropperEvent } from '@alyle/ui/image-cropper';

import { CropperDialogComponent } from '../cropper-dialog/cropper-dialog.component';

@Component({
  selector: 'aui-cropper-with-dialog',
  templateUrl: './cropper-with-dialog.component.html',
  styleUrls: ['./cropper-with-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CropperWithDialogComponent implements OnChanges {
  @Output() imgCroppedEmit: EventEmitter<string> = new EventEmitter()
  @Input() dataUrlImg : string;

  cropped?: string;
  constructor(
    private _dialog: LyDialog,
    private _cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    if(this.dataUrlImg) {
      this.cropped = this.dataUrlImg;
    }
  }

  ngOnChanges() {
    if(this.dataUrlImg) {
      this.cropped = this.dataUrlImg;
    } else {
      this.cropped = null!;
    }
  }

  openCropperDialog(event: Event) {
   // this.cropped = null!;
    this._dialog.open<CropperDialogComponent, Event>(CropperDialogComponent, {
      data: event,
      width: 320,
      disableClose: true
    }).afterClosed.subscribe((result?: ImgCropperEvent) => {
      if (result) {
        this.cropped = result.dataURL;
        this.imgCroppedEmit.emit(
          this.cropped
        );
        this._cd.markForCheck();
      }
    });
  }
}
