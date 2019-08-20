import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  private apiUrl = 'http://localhost:5000/hiretrailer/';

  constructor(private http: HttpClient) { }

  getList (type: string) {
    return this.http.get(this.apiUrl + type)
  }

  handleError () {
    return error  => {
      console.error(error);
    }
  }
}
