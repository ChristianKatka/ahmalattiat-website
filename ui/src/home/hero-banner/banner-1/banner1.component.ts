import { Component } from '@angular/core';
import { imageTransitionAnimation } from '../animations/image-transition.animation';
import { zoomInAnimation } from '../animations/zoom-in.animation';

@Component({
  standalone: true,
  selector: 'app-banner1',
  templateUrl: './banner1.component.html',
  styleUrl: './banner1.component.scss',
  animations: [imageTransitionAnimation, zoomInAnimation],
})
export class Banner1Component {}
