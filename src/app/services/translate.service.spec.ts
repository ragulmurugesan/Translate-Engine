import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TranslateService } from './translate.service';


fdescribe('TranslateService', () => {
  let httpMock: HttpTestingController;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  beforeEach(() => {
    let injector: TestBed;
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
  })

  it('should be created', () => {
    const service: TranslateService = TestBed.get(TranslateService);
    expect(service).toBeTruthy();
  });

  it('should be obtain the language data', async () => {
    const service: TranslateService = TestBed.get(TranslateService);
    const langData = {
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
    const req = httpMock.expectOne(`assets/language/lang2.json`);
    req.flush(langData);
    service.loadLanguages();
    expect(service.applicationData).toEqual(langData);
  });
});
