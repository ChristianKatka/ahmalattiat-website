import { Component } from '@angular/core';
import { LogoComponent } from '../../../Shared/logo/logo.component';
import { WrapperComponent } from '../../../Shared/wrapper/wrapper.component';
import { MaterialModule } from '../../../material.module';

@Component({
  standalone: true,
  imports: [LogoComponent, MaterialModule, WrapperComponent],
  selector: 'app-content-1-desktop',
  templateUrl: './content-1-desktop.component.html',
  styleUrl: './content-1-desktop.component.scss',
})
export class Content1DesktopComponent {}
