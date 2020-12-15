import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseNewsComponent } from './browse-news.component';

describe('BrowseNewsComponent', () => {
  let component: BrowseNewsComponent;
  let fixture: ComponentFixture<BrowseNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
