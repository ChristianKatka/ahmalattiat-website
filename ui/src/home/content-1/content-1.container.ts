import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../Store/reducers';
import { UiSelectors } from '../../Store/selectors';
import { Content1DesktopComponent } from './content-1-desktop/content-1-desktop.component';
import { Content1MobileComponent } from './content-1-mobile/content-1-mobile.component';

@Component({
  standalone: true,
  imports: [CommonModule, Content1DesktopComponent, Content1MobileComponent],
  selector: 'app-content-1',
  templateUrl: './content-1.container.html',
})
export class Content1ContainerComponent {
  isMobileScreen$ = this.store.select(UiSelectors.isMobileScreen);

  constructor(private store: Store<AppState>) {}
}
