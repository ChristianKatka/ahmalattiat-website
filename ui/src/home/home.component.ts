import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterContainerComponent } from './footer/footer.container';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { HeroContainerComponent } from './hero/hero.container';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    HeroBannerComponent,
    HeroContainerComponent,
    FooterContainerComponent,
  ],
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {}
