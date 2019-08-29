import { TimeComponent } from './../time/time.component';
import { Component, OnInit, Input, SimpleChanges, OnChanges, Output, ElementRef, ContentChild, ViewChild, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, AfterContentInit {
  @Input() childname: string;
  @ContentChild(TimeComponent, { static: false }) cChild: TimeComponent;
  @ViewChild('wrapper', { static: false }) wrapper: ElementRef;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
    const previousValue = changes['childname'].currentValue;
    console.log('inside changes' + previousValue)
  }
  ngAfterContentInit() {
    console.log('inside after content init ');
    console.log(this.cChild)
  }

}
