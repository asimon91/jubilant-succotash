import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza';
import { PIZZAS } from '../mock-pizzas';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {
  pizzas = PIZZAS;

  selectedPizza: Pizza;

  constructor() { }

  ngOnInit() {
  }

  onSelect(pizza: Pizza): void {
    this.selectedPizza = pizza;
  }

}
