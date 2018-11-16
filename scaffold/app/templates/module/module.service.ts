import {{ Injectable }} from '@angular/core';
import {{HttpClient, HttpErrorResponse, HttpHeaders}} from '@angular/common/http';
import {{Observable, throwError}} from 'rxjs';
import {{ catchError}} from 'rxjs/operators';
import {{ {Resource} }} from '../{resources}/{resource}';


@Injectable({{
  providedIn: 'root'
}})
export class {Resources}Service {{

  private token:any = localStorage.getItem('id_token');

  private httpOptions:any = {{
    headers: new HttpHeaders({{
      'Content-Type':  'application/json',
      'Authorization': this.token
    }})
  }}

  private handleError(error: HttpErrorResponse) {{
             

      if (error.error instanceof ErrorEvent) {{
        // A client-side or network error occurred. Handle it accordingly.

        return throwError("A client or network error occured" + error.error.message);
      }} 
      else {{

        // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      return throwError(
        ` code ${{error.status}}, ` +   ` ${{error.error.message}}`);
       
      }}
   
  }};
  constructor(private http: HttpClient) {{ }}


  getLists(): Observable<any> {{

   

    return this.http.get(`/api/v1/{Resource}s.json`, this.httpOptions)
    
      .pipe(
        
        
        catchError(this.handleError)
      )
    
  }}

  add({resource}: any): Observable<any> {{

    
    return this.http.post<{Resource}>(`/api/v1/signup.json`, {resource}, this.httpOptions)
      .pipe(
        catchError(this.handleError)          
        
        )
    

  
}}

login({resource}: any): Observable<any> {{

    
  return this.http.post<{Resource}>(`/api/v1/login.json`, {resource})
    .pipe(
      catchError(this.handleError)          
      
      )
  


}}

get{Resource}(id:number): Observable<any> {{

  let url = '/api/v1/{resources}/' +id + '.json';

  return this.http.get<{Resource}>(url, this.httpOptions)
    .pipe(
      catchError(this.handleError)          
      
      )
  


}}


  edit({resource}: any, id:number): Observable<any> {{

    let url = '/api/v1/{resources}/' +id + '.json';
      
    return this.http.patch<{Resource}>(url, {resource}, this.httpOptions)
      .pipe(
        catchError(this.handleError)          
        
        )
    


  }}

    delete( id:number): Observable<any> {{

      let url = '/api/v1/{resources}/' +id + '.json';
        
      return this.http.delete<{Resource}>(url, this.httpOptions)
        .pipe(
          catchError(this.handleError)          
          
          )
      


    }}
}}





