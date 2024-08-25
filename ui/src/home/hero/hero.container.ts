import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UiFacade } from '../../Store/facades/ui.facade';
import { HeroDesktopComponent } from './hero-desktop/hero-desktop.component';
import { HeroMobileComponent } from './hero-mobile/hero-mobile.component';
@Component({
  standalone: true,
  imports: [CommonModule, HeroDesktopComponent, HeroMobileComponent],
  selector: 'app-hero',
  templateUrl: './hero.container.html',
})
export class HeroContainerComponent {
  private readonly uiFacade = inject(UiFacade);

  isMobileScreen$ = this.uiFacade.isMobileScreen$;
}
