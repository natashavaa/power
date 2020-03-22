import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteseguimientodetalleComponent } from './pacienteseguimientodetalle.component';

describe('PacienteseguimientodetalleComponent', () => {
  let component: PacienteseguimientodetalleComponent;
  let fixture: ComponentFixture<PacienteseguimientodetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacienteseguimientodetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteseguimientodetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
