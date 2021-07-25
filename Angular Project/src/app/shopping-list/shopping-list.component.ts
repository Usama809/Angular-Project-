import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';
import  { Ingredient } from '../Shared/Ingredient.model';
import { ShoopingListService } from './shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit , OnDestroy {

  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private slService: ShoopingListService,
             private loggingService : LoggingService) { }

  ngOnInit() {
    this.ingredients = this.slService.getingrediants();
   this.subscription = this.slService.ingredientsChanged.subscribe(
      (ingredients : Ingredient[]) =>
      {
        this.ingredients = ingredients;
      } 
      );
      this.loggingService.printLog('Hello from ShoppingListComponent ngOnInit!');
  }
  onEditItem(index: number)
  {
      this.slService.startEditing.next(index);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
