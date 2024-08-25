import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-information',
  templateUrl: 'contact-information.component.html',
})
export class ContactInformationComponent {
  constructor(public dialogRef: MatDialogRef<ContactInformationComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
