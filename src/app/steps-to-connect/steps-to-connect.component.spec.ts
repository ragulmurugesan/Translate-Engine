import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsToConnectComponent } from './steps-to-connect.component';

describe('StepsToConnectComponent', () => {
  let component: StepsToConnectComponent;
  let fixture: ComponentFixture<StepsToConnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsToConnectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsToConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
