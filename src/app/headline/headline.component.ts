import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../services/translate.service';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html'
})
export class HeadlineComponent implements OnInit {

  constructor(public translateService: TranslateService) { }

  ngOnInit() { }

}
