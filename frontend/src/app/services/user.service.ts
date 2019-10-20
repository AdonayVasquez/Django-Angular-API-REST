import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

  constructor(private http: HttpClient) { }

  loginUser(userData: any): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api-token-auth/', userData, {headers: this.httpHeaders} );
  }
}
