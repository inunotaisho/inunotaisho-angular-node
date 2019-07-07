import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import Editor from './editor.component';

describe('Editor', () => {
  let component: Editor;
  let fixture: ComponentFixture<Editor>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Editor ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Editor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});