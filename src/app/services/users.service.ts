import { Injectable } from '@angular/core';
import { environment } from 'src/environment.local';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { throwError,Observable  } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  Iduser:number = 1
  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }
  getuser():Observable<any> {
    return this.http.get<any>(this.apiUrl + '/users').pipe(
      catchError(this.Error)
    );
  }

  private Error(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.error('Ocurrio un error:', error.error.message);
    } else {
      console.error(
        `Ocurrio un error en el back ${error.status}, ` +
        `Error: ${error.error}`);
    }
    return throwError('Ocurrio un error, vuelva a intentarlo.');
  }
}
