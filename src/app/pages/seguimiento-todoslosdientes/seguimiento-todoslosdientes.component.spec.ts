import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoTodoslosdientesComponent } from './seguimiento-todoslosdientes.component';

describe('SeguimientoTodoslosdientesComponent', () => {
  let component: SeguimientoTodoslosdientesComponent;
  let fixture: ComponentFixture<SeguimientoTodoslosdientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguimientoTodoslosdientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguimientoTodoslosdientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
