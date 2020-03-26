import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrtodoncialistaComponent } from './ortodoncialista.component';

describe('OrtodoncialistaComponent', () => {
  let component: OrtodoncialistaComponent;
  let fixture: ComponentFixture<OrtodoncialistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrtodoncialistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrtodoncialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
