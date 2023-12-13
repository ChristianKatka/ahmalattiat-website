import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../Store/reducers';
import { UiSelectors } from '../../Store/selectors';
import { HeroDesktopComponent } from './hero-desktop/hero-desktop.component';
import { HeroMobileComponent } from './hero-mobile/hero-mobile.component';
import { StateModule } from '../../Store/store.module';
@Component({
  standalone: true,
  imports: [
    CommonModule,
    HeroDesktopComponent,
    HeroMobileComponent,
    StateModule,
  ],
  selector: 'app-hero',
  templateUrl: './hero.container.html',
})
export class HeroContainerComponent {
  isMobileScreen$ = this.store.select(UiSelectors.isMobileScreen);

  constructor(private store: Store<AppState>) {}
}
