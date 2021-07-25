import { Component, ComponentFactoryResolver, OnDestroy, ViewChild} from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";

import { AuthResponseData, AuthService } from "./auth.service";
import {AlertComponent} from '../Shared/alert/alert.component';
import { PlaceHolderDirective } from "../Shared/placeholder/placeholder.directive";

@Component({
  selector :'app-auth',
  templateUrl:'./auth.component.html'
})
export class AuthComponent implements OnDestroy
{
isLoginMode = true;
isLoading = false;
error : string = null;

@ViewChild(PlaceHolderDirective , {static : false }) alertHost : PlaceHolderDirective;
private closeSub : Subscription;
constructor(private authService: AuthService,
           private router : Router,
           private componentFactoryResolver : ComponentFactoryResolver
           ) {}
onSwitchMode()
{
  this.isLoginMode = !this.isLoginMode;
}
onSubmit(form:NgForm)
{
  if(!form.valid){
return;
}
 const email = form.value.email;
 const password = form.value.password;
 
 let authObs : Observable<AuthResponseData>;
 this.isLoading = true;

 if(this.isLoginMode){
   authObs = this.authService.login(email, password);
 }else{
 authObs = this.authService.singup(email, password);
 }

 authObs.subscribe(resData => {
  console.log(resData);
  this.isLoading = false;
  this.router.navigate(['/recipes']);
},
errorMessage =>{
  console.log(errorMessage);
  this.error = errorMessage;
  this.showErrorAlert(errorMessage);
  this.isLoading = false;
}
  );

  form.reset();
}
onHandleError()
{
  this.error = null;
}
ngOnDestroy()
{
  if(this.closeSub)
  {
    this.closeSub.unsubscribe();
  }
}
 showErrorAlert(message: string)
{
  // const alertCmp =  new AlertComponent();

  const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(
    AlertComponent
    );
    debugger
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();
    const compoenentRef = hostViewContainerRef.createComponent(alertCmpFactory);

    compoenentRef.instance.message = message;
    this.closeSub = compoenentRef.instance.close.subscribe(()=> {
     this.closeSub.unsubscribe();
     hostViewContainerRef.clear();
    });

}

}
