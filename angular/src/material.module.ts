import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [MatDividerModule, MatButtonModule, MatDialogModule, MatIconModule],
  exports: [MatDividerModule, MatButtonModule, MatDialogModule, MatIconModule],
})
export class MaterialModule {}
