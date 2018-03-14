import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzasComponent } from './pizzas/pizzas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PizzaDetailComponent } from './pizza-detail/pizza-detail.component';

const routes: Routes = [
  { 
    path: 'pizzas',
    component: PizzasComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: PizzaDetailComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
