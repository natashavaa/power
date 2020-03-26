import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrtodoncialistadetalleComponent } from './ortodoncialistadetalle.component';

describe('OrtodoncialistadetalleComponent', () => {
  let component: OrtodoncialistadetalleComponent;
  let fixture: ComponentFixture<OrtodoncialistadetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrtodoncialistadetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrtodoncialistadetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
