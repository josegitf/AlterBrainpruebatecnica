import { Injectable,EventEmitter  } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { throwError,Observable  } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environment.local';
import { NewpostComponent } from 'src/app/components/newpost/newpost.component';
import { MatDialogRef } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl: string = environment.apiUrl;
  private listapost: any[] = [];
  /** ejecutar la funcion suscrita cuando ingresemos nueva data  */
  public postUpdated: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private http: HttpClient,
  ) { }
  getpublicaciones():Observable<any> {
    return this.http.get<any>(this.apiUrl + '/api/post/listpost').pipe(
      catchError(this.Error)
    );
  }
  /** en esta funcion se guardaran los datos */
  setData(data: any[]): void {
    this.listapost = data;
    console.log(this.listapost);
    this.postUpdated.emit(data);
  }
  getData(): any[] {
    return this.listapost;
  }
  /** En esta la funcion savepost()
   * se guarda la informacion del post enviando el formulario al back
   * tambien se manda la imagen del post se junta todo en un solo formulario
  */
  savepost(img:File,post:any){
    const formData = new FormData();    
    formData.append('img', img);
    formData.append('title', post.title);
    formData.append('body', post.body);
    formData.append('estado', post.estado);
    return this.http.post<any>(this.apiUrl + '/api/post/savepost',formData);
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
