import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarpadecimientoapiezadetalComponent } from './modificarpadecimientoapiezadetal.component';

describe('ModificarpadecimientoapiezadetalComponent', () => {
  let component: ModificarpadecimientoapiezadetalComponent;
  let fixture: ComponentFixture<ModificarpadecimientoapiezadetalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarpadecimientoapiezadetalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarpadecimientoapiezadetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
