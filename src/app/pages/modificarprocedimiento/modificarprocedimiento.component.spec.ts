import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarprocedimientoComponent } from './modificarprocedimiento.component';

describe('ModificarprocedimientoComponent', () => {
  let component: ModificarprocedimientoComponent;
  let fixture: ComponentFixture<ModificarprocedimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarprocedimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarprocedimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
