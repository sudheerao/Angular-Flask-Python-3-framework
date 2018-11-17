import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { catchError} from 'rxjs/operators';
import { Test } from '../tests/test';


@Injectable({
  providedIn: 'root'
})
export class TestsService {

  private token:any = localStorage.getItem('id_token');

  private httpOptions:any = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.token
    })
  }

  private handleError(error: HttpErrorResponse) {
             

      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.

        return throwError("A client or network error occured" + error.error.message);
      } 
      else {

        // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      return throwError(
        ` code ${error.status}, ` +   ` ${error.error.message}`);
       
      }
   
  };
  constructor(private http: HttpClient) { }


  getLists(): Observable<any> {

   

    return this.http.get(`/api/v1/Tests.json`, this.httpOptions)
    
      .pipe(
        
        
        catchError(this.handleError)
      )
    
  }

  add(test: any): Observable<any> {

    
    return this.http.post<Test>(`/api/v1/signup.json`, test, this.httpOptions)
      .pipe(
        catchError(this.handleError)          
        
        )
    

  
}

login(test: any): Observable<any> {

    
  return this.http.post<Test>(`/api/v1/login.json`, test)
    .pipe(
      catchError(this.handleError)          
      
      )
  


}

getTest(id:number): Observable<any> {

  let url = '/api/v1/tests/' +id + '.json';

  return this.http.get<Test>(url, this.httpOptions)
    .pipe(
      catchError(this.handleError)          
      
      )
  


}


  edit(test: any, id:number): Observable<any> {

    let url = '/api/v1/tests/' +id + '.json';
      
    return this.http.patch<Test>(url, test, this.httpOptions)
      .pipe(
        catchError(this.handleError)          
        
        )
    


  }

    delete( id:number): Observable<any> {

      let url = '/api/v1/tests/' +id + '.json';
        
      return this.http.delete<Test>(url, this.httpOptions)
        .pipe(
          catchError(this.handleError)          
          
          )
      


    }
}





