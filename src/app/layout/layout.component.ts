import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../services/translate.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  /**
   * Application's header logo path
   */
  public logoPath: string;
  constructor(public translateService: TranslateService) { }
  /**
   * Angular life cycle hooks that fires up at the time of component initialization
   */
  ngOnInit() {
    this.logoPath = "https://cdn-expa.aiesec.org/assets/images/brand_icons/GV.png";
  }
}
