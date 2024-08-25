import { Component } from '@angular/core';
import { LogoComponent } from '../../../Shared/logo/logo.component';
import { MaterialModule } from '../../../material.module';
import { WrapperComponent } from '../../../Shared/wrapper/wrapper.component';
import { zoomInAnimation } from '../animations/zoom-in.animation';
import { imageTransitionAnimation } from '../animations/image-transition.animation';

@Component({
  standalone: true,
  imports: [LogoComponent, MaterialModule, WrapperComponent],
  selector: 'app-hero-desktop',
  templateUrl: './hero-desktop.component.html',
  styleUrl: './hero-desktop.component.scss',
  animations: [imageTransitionAnimation, zoomInAnimation],
})
export class HeroDesktopComponent {}
