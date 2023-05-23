import { Ingredient } from './../shared/ingredient.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[]
  private idChangeSub: Subscription

  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.ingredients = this.slService.getIngredients()
    this.idChangeSub = this.slService.ingredientsChanged
      .subscribe(
        (ingredients) => this.ingredients = ingredients
      )
  }

  ngOnDestroy(): void {
    this.idChangeSub.unsubscribe()
  }
}

