import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent {
  @Output() showMainMenuScreen = new EventEmitter();

  public finalResult: any;

  showMainMenu() {
    this.showMainMenuScreen.emit(true);
  }
}
