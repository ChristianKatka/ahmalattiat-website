import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/material.module';
import { SharedModule } from 'src/Shared/shared.module';
import { components } from '.';

@NgModule({
  imports: [CommonModule, SharedModule, MaterialModule, FlexLayoutModule],

  declarations: [...components],
  entryComponents: [],
  exports: [...components],
})
export class HomeModule {}
