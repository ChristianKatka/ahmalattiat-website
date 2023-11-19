import { Component } from '@angular/core';
import { imageTransitionAnimation } from './animations/image-transition.animation';
import { zoomInAnimation } from './animations/zoom-in.animation';
import { WrapperComponent } from '../../Shared/wrapper/wrapper.component';

@Component({
  standalone: true,
  imports: [WrapperComponent],
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  animations: [imageTransitionAnimation, zoomInAnimation],
})
export class HeroComponent {}
