import { Component, OnInit } from '@angular/core';
import { TranslateService, } from '../services/translate.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
  constructor(public translateService: TranslateService) { }
  /**
   * Angular life cycle hooks that fires up at the time of component initialization
   */
  ngOnInit() { }

  /**
   * Method that fires when the language is switched by the user.
   * @param language Receives the updated language
   */
  onLanguageChange(language: string): void {
    if (language.includes(':')) {
      language = language.split(': ')[1];
    }
    this.translateService.currentLanguage = language;
    this.translateService.storeLanguage(language);
  }

}

