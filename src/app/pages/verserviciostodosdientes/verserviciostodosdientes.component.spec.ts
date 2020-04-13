import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerserviciostodosdientesComponent } from './verserviciostodosdientes.component';

describe('VerserviciostodosdientesComponent', () => {
  let component: VerserviciostodosdientesComponent;
  let fixture: ComponentFixture<VerserviciostodosdientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerserviciostodosdientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerserviciostodosdientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
