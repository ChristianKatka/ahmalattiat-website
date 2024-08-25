import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
})
export class WrapperComponent {}
