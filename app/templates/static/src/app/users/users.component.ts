import { Component, OnDestroy, OnInit,ChangeDetectorRef } from '@angular/core';
import { routerTransition } from '../router.animations';

import { Subscription } from 'rxjs';
import { UsersService } from './users.service';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';


@Component({
    selector: 'app-tables',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    animations: [routerTransition()]
})
export class UsersComponent implements OnInit {
   
 usersListSubs: Subscription;
 
  authenticated = false;
 
  users: any[];
  // Our future instance of DataTable
  dataTable: any;

  constructor(private usersApi: UsersService, private chRef: ChangeDetectorRef) {  }

 

  ngOnInit() {
    this.usersListSubs = this.usersApi
      .getLists()
      .subscribe(res => {
          this.users = res.data;

          // Datatables startYou'll have to wait that changeDetection occurs and projects data into 
        // the HTML template, you can ask Angular to that for you ;-)
        this.chRef.detectChanges();

        // Now you can use jQuery DataTables :
        const table: any = $('table');
        this.dataTable = table.DataTable();
        // data tables end
        },
        console.error
      );
    
  }

  ngOnDestroy() {
    this.usersListSubs.unsubscribe();
  }
    
}







