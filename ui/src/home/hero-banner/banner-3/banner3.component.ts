import { Component } from '@angular/core';
import { imageTransitionAnimation } from '../animations/image-transition.animation';
import { zoomInAnimation } from '../animations/zoom-in.animation';

@Component({
  standalone: true,
  selector: 'app-banner3',
  templateUrl: './banner3.component.html',
  styleUrl: './banner3.component.scss',
  animations: [imageTransitionAnimation, zoomInAnimation],
})
export class Banner3Component {}
