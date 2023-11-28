import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterContainerComponent } from './footer/footer.container';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { HeroComponent } from './hero/hero.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    HeroBannerComponent,
    HeroComponent,
    FooterContainerComponent,
  ],
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {}
