import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersService } from '../users.service';
import {Router, ActivatedRoute} from "@angular/router";
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit  {

   UserEditForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    name: new FormControl(''),
  });

   id:number  =  parseInt(this.route.snapshot.paramMap.get('id'));
  

  constructor(private usersApi: UsersService, private router: Router, private route: ActivatedRoute,) { 
   
  }

  ngOnInit() {

  

    this.usersApi
    // + sign here to convert from string to number
    .getUser(this.id)
    .subscribe(res => {
       // console.log( res.data);
       this.UserEditForm.setValue({
         "name" : res.data.attributes.name,
        "email" : res.data.attributes.email,
        "password" : ""

       })
       console.error
      });
          
      



        }

        onSubmit() {

          let user = {};

        if (this.UserEditForm.value.password) {
          
           user = {

              "data": {
                "type": "users",
                "attributes": {
                  "email" : this.UserEditForm.value.email,
                  "password" : this.UserEditForm.value.password,
                  "name" : this.UserEditForm.value.name,
              }
                  
                }
              
          }

        }
        else {

           
           user = {

            "data": {
              "type": "users",
              "attributes": {
                "email" : this.UserEditForm.value.email,
                "name" : this.UserEditForm.value.name,
            }
                
              }
            
        }

        }


          this.usersApi
   
               .edit(user, this.id)
               .subscribe(res => {
                  
                this.router.navigate(['/users']);

                    },
       console.error
                 );
        
        }


       



        }





  
  

  




