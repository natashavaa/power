import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarpacientepresupuestoComponent } from './modificarpacientepresupuesto.component';

describe('ModificarpacientepresupuestoComponent', () => {
  let component: ModificarpacientepresupuestoComponent;
  let fixture: ComponentFixture<ModificarpacientepresupuestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarpacientepresupuestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarpacientepresupuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
