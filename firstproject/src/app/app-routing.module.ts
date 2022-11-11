import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JumbotronComponent } from './jumbotron/jumbotron.component';


const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path: "jumbotron", component: JumbotronComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
