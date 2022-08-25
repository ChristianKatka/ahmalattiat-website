import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { components } from '.';

@NgModule({
  imports: [CommonModule],
  declarations: [...components],
  exports: [...components],
  providers: [],
  bootstrap: [],
  entryComponents: [],
})
export class SharedModule {}
