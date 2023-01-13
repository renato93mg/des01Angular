import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralLeftComponent } from './lateral-left.component';

describe('LateralLeftComponent', () => {
  let component: LateralLeftComponent;
  let fixture: ComponentFixture<LateralLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LateralLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LateralLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
