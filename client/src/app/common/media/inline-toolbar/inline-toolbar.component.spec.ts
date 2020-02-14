import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineToolbarComponent } from './inline-toolbar.component';

describe('InlineToolbarComponent', () => {
  let component: InlineToolbarComponent;
  let fixture: ComponentFixture<InlineToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlineToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
