import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedimientoAPadecimientoComponent } from './procedimiento-apadecimiento.component';

describe('ProcedimientoAPadecimientoComponent', () => {
  let component: ProcedimientoAPadecimientoComponent;
  let fixture: ComponentFixture<ProcedimientoAPadecimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedimientoAPadecimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedimientoAPadecimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
