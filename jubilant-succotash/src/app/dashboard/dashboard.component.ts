import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza';
import { PizzaService } from '../pizza.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  pizzas: Pizza[] = [];
 
  constructor(private pizzaService: PizzaService) { }
 
  ngOnInit() {
    this.getHeroes();
  }
 
  getHeroes(): void {
    this.pizzaService.getPizzas()
      .subscribe(pizzas => this.pizzas = pizzas.slice(0, 4));
  }
}