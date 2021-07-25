import {Subject} from 'rxjs';
import { Ingredient } from "../Shared/Ingredient.model";

export class ShoopingListService
{
  ingredientsChanged  = new Subject<Ingredient []>();
  startEditing = new Subject<number>();
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes' , 10),
  ];
  getIngrediant(index : number)
  {
    return this.ingredients[index];
  }
  getingrediants()
    {
      return this.ingredients.slice();
    }
    addIngrediant(ingredient : Ingredient)
    {
      this.ingredients.push(ingredient);
      this.ingredientsChanged.next(this.ingredients.slice());
    }
    addIngredients(ingredients :Ingredient [])
    {
      // for(let ingredient of this.ingredients)
      // {
      //   this.addIngrediant(ingredient);
      // }
      this.ingredients.push(...ingredients);
      this.ingredientsChanged.next(this.ingredients.slice());
    }
    updateIngredient(index : number , newIngredient : Ingredient)
    {
      this.ingredients[index] = newIngredient;
      this.ingredientsChanged.next(this.ingredients.slice());
    }
    deleteIngredient(index : number)
    {
     this.ingredients.splice(index , 1);
     this.ingredientsChanged.next(this.ingredients.slice());
    }

}
