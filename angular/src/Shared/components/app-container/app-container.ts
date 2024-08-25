import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: 'app-container.html',
})
export class AppContainer {
  @Input()
  width = '95%';
}
