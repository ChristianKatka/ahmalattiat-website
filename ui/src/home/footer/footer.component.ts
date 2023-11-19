import { Component } from '@angular/core';
import { WrapperComponent } from '../../Shared/wrapper/wrapper.component';
import { LogoComponent } from '../../Shared/logo/logo.component';
import { MaterialModule } from '../../material.module';

@Component({
  standalone: true,
  imports: [WrapperComponent, LogoComponent, MaterialModule],
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
