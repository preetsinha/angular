import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'FifthProject';

  loginForm = new FormGroup({
    username:new FormControl('karan'),
    password:new FormControl('1230')
  });

  collectData(){
      console.warn(this.loginForm.value);
  }

// userData={
//   email:"kumar123@gmail.com",
//   password:"123@abc",
//   address:"India",
//   modile:"9999999999",
// }


//All Down For Template Form
  // onSubmit(data : any){
  //      console.warn(data);
  // }

//  loginForm  = new FormGroup({
//     email: new FormControl ('',Validators.required),
//     password: new FormControl ('')
//   });
 
}
