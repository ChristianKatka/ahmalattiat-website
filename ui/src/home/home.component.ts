import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';

@Component({
  standalone: true,
  imports: [CommonModule, HeroBannerComponent],
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {}
