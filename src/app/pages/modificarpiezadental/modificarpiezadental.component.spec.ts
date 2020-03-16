import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarpiezadentalComponent } from './modificarpiezadental.component';

describe('ModificarpiezadentalComponent', () => {
  let component: ModificarpiezadentalComponent;
  let fixture: ComponentFixture<ModificarpiezadentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarpiezadentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarpiezadentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
