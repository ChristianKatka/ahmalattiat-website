import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WindowWidthService {
  public isMobileScreen$ = new BehaviorSubject<boolean>(false);

  onResize(innerWidth: number): void {
    const isMobileScreen = innerWidth < 960;

    this.isMobileScreen$.next(isMobileScreen);
  }

  serviceOnInit(innerWidth: number): void {
    const isMobileScreen = innerWidth < 960;

    this.isMobileScreen$.next(isMobileScreen);
  }
}
