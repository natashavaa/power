import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedimientoapadecimientoComponent } from './procedimientoapadecimiento.component';

describe('ProcedimientoapadecimientoComponent', () => {
  let component: ProcedimientoapadecimientoComponent;
  let fixture: ComponentFixture<ProcedimientoapadecimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedimientoapadecimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedimientoapadecimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
