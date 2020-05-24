import { Component, OnInit } from '@angular/core';
import { CvService } from '../cv.service';
import { Router } from '@angular/router';

/*cropper image */
import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { LyDialog } from '@alyle/ui/dialog';
import { ImgCropperEvent } from '@alyle/ui/image-cropper';
import { CropperDialogComponent } from '../cropper-dialog/cropper-dialog.component';

import { StyleRenderer, ThemeVariables, lyl } from '@alyle/ui';

const STYLES = (theme: ThemeVariables) => ({
  $global: lyl `{
    body {
      background-color: ${theme.background.default}
      color: ${theme.text.default}
      font-family: ${theme.typography.fontFamily}
      margin: 0
      direction: ${theme.direction}
    }
  }`,
  root: lyl `{
    display: block
  }`
});

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css'],
  providers: [
    StyleRenderer
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCvComponent implements OnInit {
  readonly classes = this.sRenderer.renderSheet(STYLES, true);
  cropped?: string;
  errorMessage = "";
  successMessage = "";
  constructor(
    private cvService: CvService,
    private router: Router,
    private _dialog: LyDialog,
    private _cd: ChangeDetectorRef,
    readonly sRenderer: StyleRenderer
  ) { }

  ngOnInit(): void {
  }

  addPersonne(formulaire) {
    this.cvService.addPersonne(formulaire.value).subscribe({
      next: (reponse) => {
        this.successMessage = "Personne ajoutée avec Succès";
        const link = ['cv'];
        setTimeout(() => {
          this.router.navigate(link)
        }, 1500);
      },
      error: (error) => {
        this.errorMessage = "Problème de connection serveur lors de l'ajout de personne";
        console.error('probleme de connection serveur pour ajout personne')
      },
      complete: () => console.log("add personne complete")
    })
  }

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
