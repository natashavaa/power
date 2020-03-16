import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarpadecimientoComponent } from './modificarpadecimiento.component';

describe('ModificarpadecimientoComponent', () => {
  let component: ModificarpadecimientoComponent;
  let fixture: ComponentFixture<ModificarpadecimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarpadecimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarpadecimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
