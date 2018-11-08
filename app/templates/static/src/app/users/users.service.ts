import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { catchError} from 'rxjs/operators';
import { User } from '../users/user';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private token:any = localStorage.getItem('id_token');

  private httpOptions:any = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.token
    })
  }

  private static _handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err.message || 'Error: Unable to complete request.');
  }

  constructor(private http: HttpClient) { }


  getLists(): Observable<any> {

   

    return this.http.get(`/api/v1/users.json`, this.httpOptions)
    
      .pipe(
        
        
        catchError(UsersService._handleError)
      )
    
  }

  add(user: any): Observable<any> {

    
    return this.http.post<User>(`/api/v1/signup.json`, user, this.httpOptions)
      .pipe(
        catchError(UsersService._handleError)          
        
        )
    

  
}

login(user: any): Observable<any> {

    
  return this.http.post<User>(`/api/v1/login.json`, user, this.httpOptions)
    .pipe(
      catchError(UsersService._handleError)          
      
      )
  


}

getUser(id:number): Observable<any> {

  let url = '/api/v1/users/' +id + '.json';

  return this.http.get<User>(url, this.httpOptions)
    .pipe(
      catchError(UsersService._handleError)          
      
      )
  


}


  edit(user: any, id:number): Observable<any> {

    let url = '/api/v1/users/' +id + '.json';
      
    return this.http.patch<User>(url, user, this.httpOptions)
      .pipe(
        catchError(UsersService._handleError)          
        
        )
    


  }

    delete( id:number): Observable<any> {

      let url = '/api/v1/users/' +id + '.json';
        
      return this.http.delete<User>(url, this.httpOptions)
        .pipe(
          catchError(UsersService._handleError)          
          
          )
      


    }
}





