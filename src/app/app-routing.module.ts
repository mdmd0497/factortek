import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', //localhost:4200/
    component: HomeComponent,
    loadChildren:() => import('./home/home.module').then(m => m.HomeModule) // así se hace lazyloading
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
