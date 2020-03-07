import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReponermaterialComponent } from './reponermaterial.component';

describe('ReponermaterialComponent', () => {
  let component: ReponermaterialComponent;
  let fixture: ComponentFixture<ReponermaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReponermaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReponermaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
