import { Component } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { User } from '../user';
import { Subscription } from 'rxjs';
import { UsersService } from '../users.service';
import {Router} from "@angular/router";



@Component({
    selector: 'user-add',
    templateUrl: './user-add.component.html',
    styleUrls: ['./user-add.component.scss'],
    animations: [routerTransition()]
})



export class UserAddComponent  {
   
    userAddSubs: Subscription;
    obj :any;
    

    constructor(private usersApi: UsersService, private router: Router) { 
             }
 
  user = new User('', '', '',);
 
  submitted = false;
  
 
  onSubmit() { this.submitted = true;

 
    this.obj = {
        "data": {
          "type": "users",
          "attributes": this.user,
            
          }
        }


    this.userAddSubs = this.usersApi
      .add(this.obj)
      .subscribe(res => {
         // console.log( res.data);

         this.router.navigate(['/users']);


        
        },
        console.error
        
        
      );

     
}
 
  newUser() {
    this.user = new User('', '', '');
  }

}

    








