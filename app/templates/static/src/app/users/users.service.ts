import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  private static _handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err.message || 'Error: Unable to complete request.');
  }

  getLists(): Observable<any> {

   

    return this.http.get(`/api/v1/users.json`)
    
      .pipe(
        
        
        catchError(UsersService._handleError)
      )
    
  }
}





