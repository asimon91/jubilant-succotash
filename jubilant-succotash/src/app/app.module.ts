import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { PizzaDetailComponent } from './pizza-detail/pizza-detail.component';
import { PizzaService } from './pizza.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';


@NgModule({
  declarations: [
    AppComponent,
    PizzasComponent,
    PizzaDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    PizzaService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
