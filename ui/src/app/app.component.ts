import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../Shared/navbar/navbar.component';
import { WindowWidthService } from '../state/window-width.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.windowWidthService.onResize(window.innerWidth);
  }
  constructor(private windowWidthService: WindowWidthService) {}

  ngOnInit(): void {
    this.windowWidthService.serviceOnInit(window.innerWidth);
  }
}
