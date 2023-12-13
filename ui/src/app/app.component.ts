import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { NavbarComponent } from '../Shared/navbar/navbar.component';
import { UiActions } from '../Store/actions';
import { AppState } from '../Store/reducers';
import { StateModule } from '../Store/store.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterOutlet, StateModule],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.store.dispatch(
      UiActions.onWindowResize({ innerWidth: window.innerWidth })
    );
  }

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(
      UiActions.onWindowResize({ innerWidth: window.innerWidth })
    );
  }
}
