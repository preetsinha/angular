import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddShopeComponent } from './add-shope/add-shope.component';
import { ListShopeComponent } from './list-shope/list-shope.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateShopeComponent } from './update-shope/update-shope.component';

const routes: Routes = [
  {
    component: AddShopeComponent,
    path: 'add'
  },
 {
    component: LoginComponent,
    path: 'login'
  },
  {
    component: RegisterComponent,
    path: 'register'
  },
  {
    component: UpdateShopeComponent,
    path: 'update/:id'
  },
  {
    component: ListShopeComponent,
    path: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
