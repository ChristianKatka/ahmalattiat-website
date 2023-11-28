import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WindowWidthService } from '../../state/window-width.service';
import { FooterDesktopComponent } from './footer-desktop/footer-desktop.component';
import { FooterMobileComponent } from './footer-mobile/footer-mobile.component';

@Component({
  standalone: true,
  imports: [CommonModule, FooterMobileComponent, FooterDesktopComponent],
  selector: 'app-footer',
  templateUrl: './footer.container.html',
})
export class FooterContainerComponent {
  constructor(public windowWidthService: WindowWidthService) {}
}
