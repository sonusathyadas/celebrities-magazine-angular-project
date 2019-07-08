import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasePersonComponent } from './base-person.component';

describe('BasePersonComponent', () => {
  let component: BasePersonComponent;
  let fixture: ComponentFixture<BasePersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasePersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasePersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
