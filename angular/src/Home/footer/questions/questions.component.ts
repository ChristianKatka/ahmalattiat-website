import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer-questions',
  templateUrl: 'questions.component.html',
  styleUrls: ['questions.component.scss'],
})
export class FooterQuestionsComponent {
  @Output()
  openContactDialog = new EventEmitter();
}
