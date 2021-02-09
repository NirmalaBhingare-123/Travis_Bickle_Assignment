import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ContactInfoComponent } from './layouts/contact-info/contact-info.component';
import { HomeComponent } from './layouts/home/home.component';
import { UserInfoComponent } from './layouts/user-info/user-info.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"", redirectTo:"/login", pathMatch:"full"},
  {path:"login", component: LoginComponent},
  {path:"home", canActivate:[AuthGuard],component:HomeComponent},
  {path:"userinfo", component:UserInfoComponent},
  {path:"contactinfo" , component:ContactInfoComponent},
  {path:"**" ,component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
