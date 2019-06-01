import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeadlineComponent } from './headline/headline.component';
import { BodyContentComponent } from './body-content/body-content.component';
import { VLogComponent } from './v-log/v-log.component';
import { VolunteerBriefComponent } from './volunteer-brief/volunteer-brief.component';
import { StepsToConnectComponent } from './steps-to-connect/steps-to-connect.component';
import { FooterComponent } from './footer/footer.component';
import { TranslateService } from './services/translate.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeadlineComponent,
    BodyContentComponent,
    VLogComponent,
    VolunteerBriefComponent,
    StepsToConnectComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
