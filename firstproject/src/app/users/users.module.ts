import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignComponent
  ],
  imports: [
    CommonModule   
  ],
  exports:[
    LoginComponent,
    SignComponent
  ]
})
export class UsersModule { }
