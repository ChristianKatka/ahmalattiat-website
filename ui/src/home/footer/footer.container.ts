import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../Store/reducers';
import { UiSelectors } from '../../Store/selectors';
import { FooterDesktopComponent } from './footer-desktop/footer-desktop.component';
import { FooterMobileComponent } from './footer-mobile/footer-mobile.component';
@Component({
  standalone: true,
  imports: [CommonModule, FooterMobileComponent, FooterDesktopComponent],
  selector: 'app-footer',
  templateUrl: './footer.container.html',
})
export class FooterContainerComponent {
  isMobileScreen$ = this.store.select(UiSelectors.isMobileScreen);

  constructor(private store: Store<AppState>) {}
}
