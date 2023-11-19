import { animate, style, transition, trigger } from '@angular/animations';

export const imageTransitionAnimation = trigger('imageTransition', [
  transition(':enter', [
    style({ backgroundColor: 'rgba(0, 0, 0, 0.8)' }),
    animate('0.5s ease-out', style({ backgroundColor: 'rgba(0, 0, 0, 0.5)' })),
  ]),
]);
