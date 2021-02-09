import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './layouts/home/home.component';
import { UserInfoComponent } from './layouts/user-info/user-info.component';
import { ContactInfoComponent } from './layouts/contact-info/contact-info.component';
import { AuthGuard } from './auth.guard';
import { AuthServiceService } from './auth-service.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserInfoComponent,
    ContactInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthGuard,AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
