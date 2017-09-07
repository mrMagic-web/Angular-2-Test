import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'fa-event-binding',
  template: `
    <p>
      <button (click)="onClicked()">Click Me!</button>
    </p>
  `,
  styles: []
})
export class EventBindingComponent {
  @Output() clicked = new EventEmitter<string>();
  onClicked(){
    this.clicked.emit('it works');
  }
}
