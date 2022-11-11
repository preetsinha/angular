import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //  path:'first', loadChildren:()=>import('./first/first.module')
  //  .then(mod=>mod.FirstModule)
  // },
  // {
  //   path:'second', loadChildren:()=>import('./second/second.module')
  //  .then(mod=>mod.SecondModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
