import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerBriefComponent } from './volunteer-brief.component';

describe('VolunteerBriefComponent', () => {
  let component: VolunteerBriefComponent;
  let fixture: ComponentFixture<VolunteerBriefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerBriefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerBriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
