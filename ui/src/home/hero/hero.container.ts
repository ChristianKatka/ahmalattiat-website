import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WindowWidthService } from '../../state/window-width.service';
import { HeroDesktopComponent } from './hero-desktop/hero-desktop.component';
import { HeroMobileComponent } from './hero-mobile/hero-mobile.component';

@Component({
  standalone: true,
  imports: [CommonModule, HeroDesktopComponent, HeroMobileComponent],
  selector: 'app-hero',
  templateUrl: './hero.container.html',
})
export class HeroContainerComponent {
  constructor(public windowWidthService: WindowWidthService) {}
}
