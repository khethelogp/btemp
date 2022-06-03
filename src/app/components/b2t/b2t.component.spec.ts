import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2tComponent } from './b2t.component';

describe('B2tComponent', () => {
  let component: B2tComponent;
  let fixture: ComponentFixture<B2tComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B2tComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B2tComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
