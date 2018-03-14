import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza';
import { PIZZAS } from '../mock-pizzas';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {
  pizzas: Pizza[];

  //selectedPizza: Pizza;

  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {
    this.getPizzas();
  }

  /*onSelect(pizza: Pizza): void {
    this.selectedPizza = pizza;
  }*/

  getPizzas(): void{
    this.pizzaService.getPizzas().subscribe(
      pizzas => this.pizzas = pizzas
    );
  }
}
