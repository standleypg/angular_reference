import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer JElcr4yjrmQRMWmYaCnp',
      }),
    };

    const COCKTAIL_URL =
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';
    const LOTR_URL = 'https://the-one-api.dev/v2/movie';

    return this.http.get<any>(LOTR_URL, httpOptions).pipe(
      catchError((error) => {
        console.log(error);
        return throwError(error);
      })
    );
  }
}
