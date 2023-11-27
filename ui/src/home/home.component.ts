import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../material.module';

@Component({
  standalone: true,
  imports: [CommonModule, HeroBannerComponent, HeroComponent, FooterComponent],
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {}
