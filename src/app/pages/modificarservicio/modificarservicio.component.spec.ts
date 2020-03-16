import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarservicioComponent } from './modificarservicio.component';

describe('ModificarservicioComponent', () => {
  let component: ModificarservicioComponent;
  let fixture: ComponentFixture<ModificarservicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarservicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarservicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
