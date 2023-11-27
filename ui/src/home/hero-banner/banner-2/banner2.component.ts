import { Component } from '@angular/core';
import { imageTransitionAnimation } from '../animations/image-transition.animation';
import { zoomInAnimation } from '../animations/zoom-in.animation';

@Component({
  standalone: true,
  selector: 'app-banner2',
  templateUrl: './banner2.component.html',
  styleUrl: './banner2.component.scss',
  animations: [imageTransitionAnimation, zoomInAnimation],
})
export class Banner2Component {}
