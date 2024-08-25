import { Component } from '@angular/core';
import { LogoComponent } from '../../../Shared/logo/logo.component';
import { MaterialModule } from '../../../material.module';

@Component({
  standalone: true,
  imports: [LogoComponent, MaterialModule],
  selector: 'app-footer-desktop',
  templateUrl: './footer-desktop.component.html',
  styleUrl: './footer-desktop.component.scss',
})
export class FooterDesktopComponent {}
