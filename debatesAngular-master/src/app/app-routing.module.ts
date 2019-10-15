import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Menu/home/home.component';
import { RootPageComponent } from './root-page/root-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './Menu/register-user/register-user.component';
import { DebatesComponent } from './Menu/debates/debates.component';
import { ReportsComponent } from './Menu/reports/reports.component';
import { ScrollDebatesComponent } from './Menu/Scroll/scroll-debates/scroll-debates.component';
import { RegisterComponent } from './register/register.component';


import { AuthLoginService } from './services/auth-login.service';

const routes: Routes = [
 {path:'',component:RootPageComponent},
 {path:'login',component:RootPageComponent},
 {path:'RegisterUser',component:RootPageComponent},
 {path:'Recovery/:id',component:RootPageComponent},
 {path:'Recovery',component:RootPageComponent},
 {path:'Home',component:HomeComponent,canActivate:[AuthLoginService]},
 {path:'Register',component:RegisterUserComponent },
 {path:'Debates',component:DebatesComponent,canActivate:[AuthLoginService] },
 {path:'Report',component:ReportsComponent ,canActivate:[AuthLoginService]},
 {path:'ScrollDebate',component:ScrollDebatesComponent ,canActivate:[AuthLoginService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
