import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe(
            'Test Recipe', 
            'This is a test', 
            'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Fries', 20)
            ]),
        new Recipe(
            'Test Recipe 2', 
            'This is a test 2', 
            'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',
            [
                new Ingredient('Chicken', 2),
                new Ingredient('Vegetable', 20)
            ]
            )
      ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice()
    }

    getRecipe(index) {
        return this.recipes[index]
    }

    addToShoppingList(ingredients) {
        this.slService.addIngredients(ingredients)
    }
}