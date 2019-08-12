import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtlformComponent } from './htlform.component';

describe('HtlformComponent', () => {
  let component: HtlformComponent;
  let fixture: ComponentFixture<HtlformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtlformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtlformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
