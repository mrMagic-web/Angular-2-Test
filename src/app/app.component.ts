import { Component } from '@angular/core';

import { LifecycleComponent } from './lifecycle.component';

@Component({
  selector: 'app-root',
  template: `
    
    <fa-lifecycle *ngIf="!delete" [bindable]="boundValue"></fa-lifecycle>
    	<p>{{test}}</p>
    <button (click)="delete = true">Click To Delete</button>
    <button (click)="test = 'changed value'">Click To Change Content</button>
    <button (click)="boundValue = 2000">Click To Change Binding</button>
  `,
})
export class AppComponent {
  delete = false;
  test='starting value';
  boundValue = 1000;
}
