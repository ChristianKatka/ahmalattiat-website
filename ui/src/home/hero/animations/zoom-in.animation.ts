import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

export const zoomInAnimation = trigger('zoomIn', [
  state(
    'void',
    style({
      transform: 'scale(1)',
    })
  ),
  state(
    '*',
    style({
      transform: 'scale(1.05)',
    })
  ),
  transition(':enter, :leave', animate('3000ms ease-in-out')),
]);
