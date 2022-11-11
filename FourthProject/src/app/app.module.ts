import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FirstModule } from './first/first.module';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AdminlistComponent } from './adminlist/adminlist.component';
// import { LoginComponent } from './first/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    AdminlistComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    UserModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
