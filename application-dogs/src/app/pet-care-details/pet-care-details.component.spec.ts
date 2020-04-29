import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetCareDetailsComponent } from './pet-care-details.component';

describe('PetCareDetailsComponent', () => {
  let component: PetCareDetailsComponent;
  let fixture: ComponentFixture<PetCareDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetCareDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetCareDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
