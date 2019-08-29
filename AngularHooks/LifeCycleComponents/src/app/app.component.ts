import { TimeComponent } from './time/time.component';
import { ChildComponent } from './child/child.component';
import { Component, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentChecked, AfterViewInit, AfterContentInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, Input, ContentChild } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck, AfterContentChecked, AfterViewInit, AfterViewChecked, AfterContentInit, OnDestroy {
  title = 'LifeCycleComponents';
  private _currentValue;
  private _previousValue = "John";
  public changeDetected: boolean = false;
  @ViewChild('ref', { static: false }) name: ElementRef;
  @ContentChild(ChildComponent, { static: false }) cChild: ChildComponent;


  ngOnInit() {
    this._currentValue = "hello";
    console.log('inside onInit');
  }
  ngDoCheck() {
    console.log('inside doCheck');
    if (this._previousValue !== this._currentValue) {
      this.changeDetected = true;
      console.log('variables changed');

    }
  }
  ngAfterViewInit() {
    console.log(this.name.nativeElement.value);
    console.log('inside AfterViewInit');

  }
  ngAfterContentChecked() {
    console.log('inside AfteContentChecked');
  }
  ngAfterContentInit() {
    console.log('police walalalalalall');
    console.log(this.cChild);
  }
  ngAfterViewChecked() {
    console.log('inside AfterViewChecked');
  }
  ngOnDestroy() {
  }

}
