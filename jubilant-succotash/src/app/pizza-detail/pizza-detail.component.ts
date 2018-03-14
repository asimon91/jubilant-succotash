import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Pizza } from '../pizza';
import { PizzaService } from '../pizza.service';


@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.css']
})
export class PizzaDetailComponent implements OnInit {
  @Input() pizza: Pizza;

  constructor(
    private route: ActivatedRoute,
    private pizzaService: PizzaService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPizza();
  }

  getPizza(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.pizzaService.getPizza(id).subscribe(hero => this.pizza = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
