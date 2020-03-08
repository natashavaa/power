import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadecimientoADienteComponent } from './padecimiento-adiente.component';

describe('PadecimientoADienteComponent', () => {
  let component: PadecimientoADienteComponent;
  let fixture: ComponentFixture<PadecimientoADienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadecimientoADienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadecimientoADienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
