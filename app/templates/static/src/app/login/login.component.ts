import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { User } from '../users/user';
import { Subscription } from 'rxjs';
import { UsersService } from '../users/users.service';
import { FormGroup, FormControl } from '@angular/forms';



@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent  {

    LoginSubs: Subscription;
    obj :any;
    LoginForm = new FormGroup({
        email: new FormControl(''),
        password: new FormControl(''),
      });

    constructor(private usersApi: UsersService, private router: Router, ) { 
             }
    
    
    onLoggedin() {

        console.log(this.LoginForm.value)
        console.log(this.LoginForm.value.email)

        this.obj = {
            "data": {
              "type": "users",
              "attributes": {
                  "email" : this.LoginForm.value.email,
                  "password" : this.LoginForm.value.password
              }
                
              }
            }


        localStorage.setItem('isLoggedin', 'true');
    }
}
