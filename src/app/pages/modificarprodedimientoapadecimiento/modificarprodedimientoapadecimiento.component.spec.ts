import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarprodedimientoapadecimientoComponent } from './modificarprodedimientoapadecimiento.component';

describe('ModificarprodedimientoapadecimientoComponent', () => {
  let component: ModificarprodedimientoapadecimientoComponent;
  let fixture: ComponentFixture<ModificarprodedimientoapadecimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarprodedimientoapadecimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarprodedimientoapadecimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
