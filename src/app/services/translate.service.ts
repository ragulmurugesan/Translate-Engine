import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
/**
 * Service to handle the language changes
 */
export class TranslateService {
  /**
   * Property to hold the entire language data
   */
  public applicationData: any;
  /**
   * Property to hold the user's active language
   */
  public currentLanguage: string;

  public languages: string[] = ['English', 'French', 'Spanish', 'Portuguese', 'German', 'Mandarin'];

  constructor(private Http: HttpClient) {
    this.setDefaultLanguage();
    this.loadLanguages();
  }
  /**
   * Method to obtain the user preferred language
   */
  setDefaultLanguage() {
    let presetLang = localStorage.getItem('gb_lang');
    if (presetLang && this.languages.includes(presetLang)) {
      this.currentLanguage = localStorage.getItem('gb_lang');
    }
    else {
      let langCode = navigator.language.split('-')[0];
      switch (langCode) {
        case 'en': this.currentLanguage = 'English'; break;
        case 'fr': this.currentLanguage = 'French'; break;
        case 'es': this.currentLanguage = 'Spanish'; break;
        case 'pt': this.currentLanguage = 'Portuguese'; break;
        case 'de': this.currentLanguage = 'German'; break;
        case 'zh': this.currentLanguage = 'Mandarin'; break;
        default: this.currentLanguage = 'English';
      }
    }
  }
  /**
   * Method to load the language json
   */
  loadLanguages(): void {
    this.Http.get("assets/language/lang2.json", { responseType: 'text' })
      .subscribe(
        data => {
          this.applicationData = JSON.parse(data);
        },
        error => {
          console.log("Data not found", error);
        }
      );
  }

  storeLanguage(language) {
    localStorage.setItem('gb_lang', language);
  }
}
