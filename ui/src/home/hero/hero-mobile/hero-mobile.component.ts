import { Component } from '@angular/core';
import { LogoComponent } from '../../../Shared/logo/logo.component';
import { MaterialModule } from '../../../material.module';
import { WrapperComponent } from '../../../Shared/wrapper/wrapper.component';
import { imageTransitionAnimation } from '../animations/image-transition.animation';
import { zoomInAnimation } from '../animations/zoom-in.animation';

@Component({
  standalone: true,
  imports: [LogoComponent, MaterialModule, WrapperComponent],
  selector: 'app-hero-mobile',
  templateUrl: './hero-mobile.component.html',
  styleUrl: './hero-mobile.component.scss',
  animations: [imageTransitionAnimation, zoomInAnimation],
})
export class HeroMobileComponent {}
