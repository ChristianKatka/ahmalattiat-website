import { Component } from '@angular/core';
import { DialogService } from './services/dialog.service';

@Component({
  templateUrl: 'home-feature.container.html',
})
export class HomeContainerComponent {
  constructor(private dialogService: DialogService) {}

  openContactDialog() {
    this.dialogService.openContactInformationDialog();
  }
}
