import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbbBookComponent } from './abb-book/abb-book.component';
import { ListBookComponent } from './list-book/list-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';


const routes: Routes = [
  {
    component:AbbBookComponent,
    path:'add'
  },
  {
    component:ListBookComponent,
    path:'list'
  },
  {
    component:UpdateBookComponent,
    path:'update/:id'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
