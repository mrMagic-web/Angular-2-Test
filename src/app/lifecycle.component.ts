import { 
Component, 
OnChanges,
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy,
Input,
ViewChild
} from '@angular/core';

@Component({
  selector: 'fa-lifecycle',
  template: `
    <ng-content></ng-content>
    <p #boundParagraph>{{bindable}}</p>
    <p>{{boundParagraph.textContent}}</p>
  `
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() bindable = 1000;

  @ViewChild('boundParagraph') 
  boundParagraph: HTMLElement;

  constructor() { }
  ngOnChanges() {
    this.log('ngOnChanges')
  }
  ngOnInit() {
    this.log('ngOnInit')
  }
  ngDoCheck() {
    this.log('ngDoCheck')
  }
  ngAfterContentInit(){
    this.log('ngAfterContentInit')
  }
  ngAfterContentChecked(){
    this.log('ngAfterContentChecked')
  }
  ngAfterViewInit(){
    this.log('ngAfterViewInit')
  }
  ngAfterViewChecked(){
    this.log('ngAfterViewChecked')
  }
  ngOnDestroy(){
    this.log('ngOnDestroy')
  }
   private log(hook: string){
       console.log(hook);
   }
}
