import { Injectable } from '@angular/core';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

constructor(private _snackBarService: SnackbarService) { }

  copyToClipboard(url: string) {
    const textArea = document.createElement("textarea");
    textArea.textContent = url;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    this._snackBarService.openSnackBar("Link copied!")
  }
}
