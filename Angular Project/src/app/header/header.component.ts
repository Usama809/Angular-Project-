import { Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../Shared/data-storage.service';
// import { EventEmitter } from 'events';

@Component({
  selector :'app-header',
  templateUrl :'./header.component.html'
})

export class HeaderComponenet implements OnInit , OnDestroy{
  private userSub : Subscription ;
  isAuthenticated = false;

  constructor(
    private dataStorageService : DataStorageService,
    private authService : AuthService
    ){}
 ngOnInit()
 {
this.userSub = this.authService.user.subscribe(user => {
  this.isAuthenticated = !!user;
  console.log(!user);
  console.log(!!user);

});
  }

  onSaveData()
  {
     this.dataStorageService.storeRecipes
  }
  onFetchData()
  {
    this.dataStorageService.fetchRecipes().subscribe();
  }
  OnLogout()
  {
    this.authService.logout();
  }
  ngOnDestroy()
  {
    this.userSub.unsubscribe();
  }
 
}
