import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../services/translate.service';

@Component({
  selector: 'app-steps-to-connect',
  templateUrl: './steps-to-connect.component.html'
})
export class StepsToConnectComponent implements OnInit {

  constructor(public translateService: TranslateService) { }

  ngOnInit() {
  }

}
