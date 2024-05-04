import { BloodbankComponent } from './components/bloodbank/bloodbank.component';
import { HospitalComponent } from '../app/components/hospital/hospital.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MaterialModule} from './app-material.module';

import {AppComponent} from './app.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {LoginComponent} from './components/auth/login/login.component';
import {RegisterComponent} from './components/auth/register/register.component';
import {LandingComponent} from './components/landing/landing.component';
import {MainPageComponent} from './components/main-page/main-page.component';

import {AuthGuard} from './guards/auth.guard';
import {AuthService} from './services/auth/auth.service';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CustomErrorStateMatcher} from './services/errorStateMatcher/error-state-matcher.service';

import {JwtHelperService, JwtModule} from '@auth0/angular-jwt';
import {SocketService} from './services/socket/socket.service';
import {WindowRef} from './helpers/windowRef';


const appRoutes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'main', component: MainPageComponent, canActivate: [AuthGuard]},
  {path: 'hospital', component:HospitalComponent},
  {path: 'bloodbank', component:BloodbankComponent}
];

export function jwtTokenGetter() {
  return localStorage.getItem('id_token');
}

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavigationComponent,
    LoginComponent,
    RegisterComponent,
    MainPageComponent,
    HospitalComponent,
    BloodbankComponent 
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing: false}),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter,
        whitelistedDomains: [],
        blacklistedRoutes: []
      }
    })
  ],
  providers: [AuthService, AuthGuard, SocketService, CustomErrorStateMatcher, JwtHelperService],
  bootstrap: [AppComponent]
})

export class AppModule {

}
