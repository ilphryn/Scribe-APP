import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignlistComponent } from './signlist.component';

describe('SignlistComponent', () => {
  let component: SignlistComponent;
  let fixture: ComponentFixture<SignlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
