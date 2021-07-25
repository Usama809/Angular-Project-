import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { SharedModule } from "../Shared/shared.module";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";
// import { LoggingService } from "../logging.service";

@NgModule({
    declarations : [
        ShoppingListComponent,
        ShoppingEditComponent,
    ],
    imports: [
      FormsModule,
      RouterModule.forChild([{path : '' , component : ShoppingListComponent }]),
      SharedModule
    ],
    // providers : [LoggingService]
})
export class ShoppingListModule {}