import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../Shared/navbar/navbar.component';
import { UiFacade } from '../Store/facades/ui.facade';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.uiFacade.onWindowResize(window.innerWidth);
  }

  private readonly uiFacade = inject(UiFacade);

  ngOnInit(): void {
    this.uiFacade.onWindowResize(window.innerWidth);
  }
}
