import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { AuthInterceptorService } from "./auth/auth.interceptor.service";
import { RecipeService } from "./recipes/recipe.service";
import { ShoopingListService } from "./shopping-list/shopping-list.service";

@NgModule({
    providers: [
        ShoopingListService,
         RecipeService , 
{
    provide : HTTP_INTERCEPTORS , 
    useClass : AuthInterceptorService ,
    multi :true
},
// LoggingService
]
})
export class CoreModule {}
