import { RecipeService } from './recipe.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit  {
  selectedRecipe: Recipe = null;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.recipeService.recipeSelected
    //   .subscribe(
    //     (recipe) => {
    //       this.selectedRecipe = recipe
    //     }
    //   )
  }

  onGetRecipe(event) {
    console.log(event)
  }
}
