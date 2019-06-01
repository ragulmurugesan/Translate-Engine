import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LayoutComponent } from './layout.component';
import { Component, Injectable } from '@angular/core';

/* Mock Tranlsate service */
@Injectable({
  providedIn: 'root'
})

class mockTranslateService { }

/* Mocked the components used */
@Component({
  selector: 'app-headline',
  template: ``
})
class MockLayoutComponent1 { }
@Component({
  selector: 'app-body-content',
  template: ``
})
class MockLayoutComponent2 { }
@Component({
  selector: 'app-v-log',
  template: ``
})
class MockLayoutComponent3 { }
@Component({
  selector: 'app-volunteer-brief',
  template: ``
})
class MockLayoutComponent4 { }
@Component({
  selector: 'app-steps-to-connect',
  template: ``
})
class MockLayoutComponent5 { }
@Component({
  selector: 'app-footer',
  template: ``
})
class MockLayoutComponent6 { }

fdescribe('LayoutComponent', () => {
  let component: LayoutComponent;
  let service: mockTranslateService;
  let fixture: ComponentFixture<LayoutComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutComponent, MockLayoutComponent1, MockLayoutComponent2, MockLayoutComponent3,
        MockLayoutComponent4, MockLayoutComponent5, MockLayoutComponent6],
      providers: [mockTranslateService],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);

    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(mockTranslateService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // Positive test case
  it('should render the header logo', () => {
    const compiled: HTMLElement = fixture.debugElement.nativeElement;
    let imageHeight = compiled.querySelector('.global-logo-img').clientHeight;
    expect(imageHeight).toBeGreaterThan(30);
  });
  // Negative test case - To test what will happen if the image is not getting loaded
  it('should not render the header logo', () => {
    component.logoPath = "";
    fixture.detectChanges();
    const compiled: HTMLElement = fixture.debugElement.nativeElement;
    let imageHeight = compiled.querySelector('.global-logo-img').clientHeight;
    expect(imageHeight).not.toBeGreaterThan(30);
  });
});
