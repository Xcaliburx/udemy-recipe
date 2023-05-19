import { Ingredient } from './../shared/ingredient.model';
import { Component } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Apples', 10)
  ];

  onIngredientAdded(ingredient) {
    this.ingredients.push(ingredient)
  }
}

