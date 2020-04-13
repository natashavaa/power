import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerserviciosOrtodonciaComponent } from './verservicios-ortodoncia.component';

describe('VerserviciosOrtodonciaComponent', () => {
  let component: VerserviciosOrtodonciaComponent;
  let fixture: ComponentFixture<VerserviciosOrtodonciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerserviciosOrtodonciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerserviciosOrtodonciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
