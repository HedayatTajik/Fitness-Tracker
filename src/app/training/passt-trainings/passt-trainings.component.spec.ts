import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasstTrainingsComponent } from './passt-trainings.component';

describe('PasstTrainingsComponent', () => {
  let component: PasstTrainingsComponent;
  let fixture: ComponentFixture<PasstTrainingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasstTrainingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasstTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
