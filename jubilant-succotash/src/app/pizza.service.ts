import { Injectable } from '@angular/core';
import { Pizza } from './pizza';
import { PIZZAS } from './mock-pizzas';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class PizzaService {

  constructor(private messageService: MessageService) { }

  getPizzas(): Observable<Pizza[]> {
    // Todo: send the message _after_ fetching the pizzas
    this.messageService.add('PizzaService: fetched pizzas');
    return of(PIZZAS);
  }
}
