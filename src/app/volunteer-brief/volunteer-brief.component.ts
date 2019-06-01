import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../services/translate.service';

@Component({
  selector: 'app-volunteer-brief',
  templateUrl: './volunteer-brief.component.html',
  styleUrls: ['./volunteer-brief.component.scss']
})
export class VolunteerBriefComponent implements OnInit {

  constructor(public translateService: TranslateService) { }

  ngOnInit() {
  }

}
