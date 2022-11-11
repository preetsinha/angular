import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './login/login.component';
// import { ListComponent } from './list/list.component';

// const routes: Routes = [
//     {path:'Login' , component:LoginComponent},
//     {path:'List' , component:ListComponent}
// ];

const routes: Routes = [
  {

    path:'user' , children:[
      // {path:'Login', component:LoginComponent},
      // {path:'List', component:ListComponent}
  ]
 }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
