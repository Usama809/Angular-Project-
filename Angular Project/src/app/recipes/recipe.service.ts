import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

import {ShoopingListService} from '../shopping-list/shopping-list.service';
import { Ingredient } from "../Shared/Ingredient.model";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService
{
  recipeChanged = new Subject<Recipe[]>();
//  private recipes: Recipe[] =[

//    new Recipe(
//      'Tasty Schnitzel',
//     'A super-tasty Schnitzel - just awesome!',
//      'https://static.toiimg.com/thumb/79811787.cms?width=680&height=512&imgsize=1287698',
//     [
//       new Ingredient('Meat', 1),
//       new Ingredient('French Fries', 20)
//     ]),
//   new Recipe('Big Fat Burger',
//     'What else you need to say?',
//     'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg',
//     [
//       new Ingredient('Buns', 2),
//       new Ingredient('Meat', 1)
//     ])
//     ];
private recipes :Recipe[] = [];

  constructor(private slService: ShoopingListService) {}
  setRecipes(recipes: Recipe[])
  {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }
  getRecipes()
  {
    return this.recipes.slice();
  }

  getRecipe(index: number)
  {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingids : Ingredient[])
  {
    this.slService.addIngredients(ingids);

  }
  addRecipe(recipe : Recipe)
  {
     this.recipes.push(recipe);
     this.recipeChanged.next(this.recipes.slice());
  }
  updateRecipe(index : number, newRecipe : Recipe)
  {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }
  deleteRecipe(index : number)
{
  this.recipes.splice(index , 1);
  this.recipeChanged.next(this.recipes.slice());
}
}
