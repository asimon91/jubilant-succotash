import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { PizzaDetailComponent } from './pizza-detail/pizza-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    PizzasComponent,
    PizzaDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
