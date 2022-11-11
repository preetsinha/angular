import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {LoginComponent } from './users/login/login.component';
import {SignupComponent } from './users/signup/signup.component'

const routes: Routes = [
  {
    path:'Login',
    component : LoginComponent
  },
  {
    path:'Signup',
    component : SignupComponent
  },
{
  path:'user',
  component : UserComponent
},
{
  path:'admin',
  component : AdminComponent
},
{
  path:'**',
  component : PageNotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
