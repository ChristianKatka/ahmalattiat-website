import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactInformationComponent } from '../contact-information/contact-information.component';

@Injectable({ providedIn: 'root' })
export class DialogService {
  constructor(private dialog: MatDialog) {}

  openContactInformationDialog() {
    this.dialog.open(ContactInformationComponent, {
      maxWidth: '100vw',
      panelClass: 'media-dialog',
    });
  }
}
