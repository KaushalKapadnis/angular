import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLinkActive, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule, routes } from './app-routing.module';
import { provideHttpClient } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    RouterModule,
    RouterLinkActive,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
