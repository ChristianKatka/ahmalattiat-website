import { Component } from '@angular/core';
import { LogoComponent } from '../../../Shared/logo/logo.component';
import { MaterialModule } from '../../../material.module';

@Component({
  standalone: true,
  imports: [LogoComponent, MaterialModule],
  selector: 'app-footer-mobile',
  templateUrl: './footer-mobile.component.html',
  styleUrl: './footer-mobile.component.scss',
})
export class FooterMobileComponent {}
