import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Observable,  pipe, throwError} from 'rxjs';
import { Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CalificacionLlamadaService {
  private urlService: any = environment;


  constructor(
    private http: Http,
    private httpClient: HttpClient
  ) { }

  public obtenerCalificacionService(paramsFilter ): Observable<any> {
    return this.http.post('http://localhost:54017/api/calificacion', '', { headers: this.headersService() }).pipe(
      map(response => {
        return response.json();
      }), pipe(catchError(this.handleError)));
  }

  private headersService(): Headers {
    const myHeaders = new Headers();
    myHeaders.append('Access-Control-Allow-Origin', '*');
    myHeaders.append('Content-type', 'application/json');
    return myHeaders;
  }

  private handleError(error: Response) {
    const setError = (error['_body']) ? error['_body'] : error.statusText;
    const json = {
      Errors: [setError],
      Resultado: [],
      EsExitoso: false,
      Status: error.status
    };
    return throwError(json);
  }

}
