import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoslosdientesdetalleComponent } from './todoslosdientesdetalle.component';

describe('TodoslosdientesdetalleComponent', () => {
  let component: TodoslosdientesdetalleComponent;
  let fixture: ComponentFixture<TodoslosdientesdetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoslosdientesdetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoslosdientesdetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
