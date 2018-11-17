import { Component, OnDestroy, OnInit,ChangeDetectorRef } from '@angular/core';
import { routerTransition } from '../router.animations';

import { Subscription } from 'rxjs';
import { TestsService } from './tests.service';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';


@Component({
    selector: 'app-tables',
    templateUrl: './tests.component.html',
    styleUrls: ['./tests.component.scss'],
    animations: [routerTransition()]
})
export class TestsComponent implements OnInit {
   
 testsListSubs: Subscription;
 
  authenticated = false;
 
  tests: any[];
  // Our future instance of DataTable
  dataTable: any;

  http_errors :boolean = false;
  error_message:any;

  constructor(private testsApi: TestsService, private chRef: ChangeDetectorRef) {  }

 

  ngOnInit() {
    this.testsListSubs = this.testsApi
      .getLists()
      .subscribe(res => {
          this.tests = res.data;

          // Datatables startYou'll have to wait that changeDetection occurs and projects data into 
        // the HTML template, you can ask Angular to that for you ;-)
        this.chRef.detectChanges();

        // Now you can use jQuery DataTables :
        const table: any = $('table');
        this.dataTable = table.DataTable();
        // data tables end
        },
        error => {
          this.http_errors = true;

            this.error_message = error 


        }  
      );
    
  }

  deleteTest(id : number )  {

    this.testsApi

         .delete(id)
         .subscribe(res => {
            
          location.reload();

              },
              error => {
                this.http_errors = true;
      
                  this.error_message = error 
      
      
              } 
                    );
            
            }

  ngOnDestroy() {
    this.testsListSubs.unsubscribe();
  }
    
}







