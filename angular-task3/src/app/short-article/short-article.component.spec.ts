import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortArticleComponent } from './short-article.component';

describe('ShortArticleComponent', () => {
  let component: ShortArticleComponent;
  let fixture: ComponentFixture<ShortArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
