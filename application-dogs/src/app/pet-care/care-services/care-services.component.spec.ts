import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareServicesComponent } from './care-services.component';

describe('CareServicesComponent', () => {
  let component: CareServicesComponent;
  let fixture: ComponentFixture<CareServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
