import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafariGateComponent } from './safari-gate.component';

describe('SafariGateComponent', () => {
  let component: SafariGateComponent;
  let fixture: ComponentFixture<SafariGateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SafariGateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SafariGateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
