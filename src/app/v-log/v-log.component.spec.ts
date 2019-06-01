import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VLogComponent } from './v-log.component';

describe('VLogComponent', () => {
  let component: VLogComponent;
  let fixture: ComponentFixture<VLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
