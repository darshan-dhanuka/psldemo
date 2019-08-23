import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BlogComponent } from './blog/blog.component';
import { FaqsComponent } from './faqs/faqs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { HomeComponent } from './home/home.component';
import { NevigationComponent } from './nevigation/nevigation.component';
import { LeagueStructureComponent } from './league-structure/league-structure.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { SocialLoginModule } from 'angularx-social-login';
import { AuthServiceConfig, GoogleLoginProvider  } from 'angularx-social-login';
import { AndhraBulletsComponent } from './andhra-bullets/andhra-bullets.component';
import { BengaluruWarriorsComponent } from './bengaluru-warriors/bengaluru-warriors.component';
import { ChennaiThalaivasComponent } from './chennai-thalaivas/chennai-thalaivas.component';
import { DelhiPentharsComponent } from './delhi-penthars/delhi-penthars.component';
import { GujratFalconsComponent } from './gujrat-falcons/gujrat-falcons.component';
import { GoanNutsComponent } from './goan-nuts/goan-nuts.component';
import { KolkataKingsComponent } from './kolkata-kings/kolkata-kings.component';
import { MumbaiAnchorsComponent } from './mumbai-anchors/mumbai-anchors.component';
import { PuneSharksComponent } from './pune-sharks/pune-sharks.component';
import { PunjabBluffersComponent } from './punjab-bluffers/punjab-bluffers.component';
import { RajasthanTiltersComponent } from './rajasthan-tilters/rajasthan-tilters.component';
import { PreviousSeasonsComponent } from './previous-seasons/previous-seasons.component';


import { TermsComponent } from './terms/terms.component';
import { BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { Nev2Component } from './nev2/nev2.component';
import { AboutComponent } from './about/about.component';
import { MediaComponent } from './media/media.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('230059724929-7cusacc7jktuajmot7tjl0adu0u01co7.apps.googleusercontent.com')
  },
  // {
  //   id: FacebookLoginProvider.PROVIDER_ID,
  //   provider: new FacebookLoginProvider('561602290896109')
  // },
  // {
  //   id: LinkedInLoginProvider.PROVIDER_ID,
  //   provider: new LinkedInLoginProvider("78iqy5cu2e1fgr")
  // }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LeagueStructureComponent,
    BlogComponent,
    FaqsComponent,
    PreviousSeasonsComponent,
    HomeComponent,
    NevigationComponent,
    LoginComponent,
    RegisterComponent,
   
    AndhraBulletsComponent,
    BengaluruWarriorsComponent,
    ChennaiThalaivasComponent,
    DelhiPentharsComponent,
    GujratFalconsComponent,
    GoanNutsComponent,
    KolkataKingsComponent,
    MumbaiAnchorsComponent,
    PuneSharksComponent,
    PunjabBluffersComponent,
    RajasthanTiltersComponent,
    TermsComponent,
    Nev2Component,
    AboutComponent,
    MediaComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [AuthenticationService, AuthGuardService,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
