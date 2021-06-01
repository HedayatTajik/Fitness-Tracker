import { AuthGuard } from './auth/auth.guard';
import { SignupComponent } from './auth/signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './training/training.component';


const routes: Routes = [
  {
    path: '', component: WelcomeComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'signin', component: LoginComponent
  },
  {
    path: 'training', component: TrainingComponent, canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
