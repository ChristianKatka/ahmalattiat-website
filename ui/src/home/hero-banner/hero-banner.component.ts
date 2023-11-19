import { Component } from '@angular/core';
import { imageTransitionAnimation } from './animations/image-transition.animation';
import { zoomInAnimation } from './animations/zoom-in.animation';

@Component({
  standalone: true,
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.scss',
  animations: [imageTransitionAnimation, zoomInAnimation],
})
export class HeroBannerComponent {}
