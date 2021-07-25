import { Ingredient } from "../Shared/Ingredient.model";

export class Recipe{
public name: string;
public description:string ;
public imagePath : string;
public ingids : Ingredient[];

constructor(name: string, desc: string, imagePath : string , ingids : Ingredient[])
{
  this.name = name;
  this.description=desc;
  this.imagePath=imagePath;
  this.ingids = ingids;
}

}

