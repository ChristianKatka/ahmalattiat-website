import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatIconModule, MatDividerModule],
  exports: [MatButtonModule, MatToolbarModule, MatIconModule, MatDividerModule],
})
export class MaterialModule {}
