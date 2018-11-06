import { Component } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Subscription } from 'rxjs';
import { UsersService } from '../users.service';
import {Router} from "@angular/router";
import { FormGroup, FormControl } from '@angular/forms';




@Component({
    selector: 'user-add',
    templateUrl: './user-add.component.html',
    styleUrls: ['./user-add.component.scss'],
    animations: [routerTransition()]
})



export class UserAddComponent  {
   
    userAddSubs: Subscription;
    obj :any;

    UserAddForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      name: new FormControl(''),
    });
    

    constructor(private usersApi: UsersService, private router: Router) { 
             }
 
 
  
 
  onSubmit() { 
     
 
    this.obj = {
        "data": {
          "type": "users",
          "attributes": {
            "email" : this.UserAddForm.value.email,
            "password" : this.UserAddForm.value.password,
            "name" : this.UserAddForm.value.name,
        }
            
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
 
 

}

    








