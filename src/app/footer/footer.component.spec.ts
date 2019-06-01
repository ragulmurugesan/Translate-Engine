import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FooterComponent } from './footer.component';
import { FormsModule } from '@angular/forms';
import { Component, Injectable } from '@angular/core';
import { TranslateService } from '../services/translate.service';
/* Mock Tranlsate service */
@Injectable({
  providedIn: 'root'
})

class mockTranslateService {
  applicationData = {
    "key2080": {
      "English": "Countries covered",
      "Spanish": "Países cubiertos",
      "Portuguese": "Países abrangidos",
      "French": "Pays couverts",
      "Mandarin (Simplified)": "国家与地区",
      "Polish": "Kraje partnerskie",
      "German": "Abgedeckte Länder"
    }
  };
}

fdescribe('FooterComponent', () => {
  let component: FooterComponent;
  let service: mockTranslateService;
  let httpMock: HttpTestingController;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
      imports: [FormsModule, HttpClientTestingModule]
    })
      .overrideComponent(FooterComponent, {
        set: {
          providers: [{ provide: TranslateService, useClass: mockTranslateService }]
        }
      });
  }));

  beforeEach(() => {
    let injector: TestBed;
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(mockTranslateService);
    fixture.detectChanges();
  });

  it('should create', () => {
    // const langData = 
    // const req = httpMock.expectOne(`assets/language/lang2.json`);
    // req.flush(langData);
    // service.loadLanguages();
    expect(component).toBeTruthy();
  });
});
