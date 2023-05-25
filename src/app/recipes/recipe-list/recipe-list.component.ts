import { Subscription } from 'rxjs';
import { RecipeService } from './../recipe.service';
import { OnInit, OnDestroy } from '@angular/core';
import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[]
  subscription: Subscription

  constructor(private recipeService: RecipeService, 
    private router: Router, 
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.subscription = this.recipeService.recipesChanged
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes
        }
      )
    this.recipes = this.recipeService.getRecipes()
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
