import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Content1ContainerComponent } from './content-1/content-1.container';
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
    Content1ContainerComponent,
  ],
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {}
