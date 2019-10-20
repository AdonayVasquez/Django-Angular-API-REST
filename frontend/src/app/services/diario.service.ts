import { getCurrentQueries } from "@angular/core/src/render3/state";


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class DiarioService {

  constructor( private http:HttpClient) { }

  getPostUnico(id:number) {
    return this.http.get('http://127.0.0.1:8000/post/entradas/'+ id+'/');
  }

  getPost() {
    return this.http.get('http://127.0.0.1:8000/post/entradas/', this.getAuthHeaders());
  }

  postPost(formData) {
   return this.http.post('http://127.0.0.1:8000/post/entradas/', formData, this.getAuthHeaders());
  }

  editPost(formData, id: number): Observable<any> {
    return this.http.put('http://127.0.0.1:8000/post/entradas/' + id + '/', formData, this.getAuthHeaders() );
  }
  deletePost( id: number): Observable<any> {
    return this.http.delete('http://127.0.0.1:8000/post/entradas/' + id + '/', this.getAuthHeaders() );
  }

  addPost(formData: any ): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data'
      })
    };
    return this.http.post('http://127.0.0.1:8000/post/entradas/', formData, httpOptions );
  }

  private getHeaders() {
    const httpHeaders = new HttpHeaders(
      {'Content-Type': 'application/json; charset=utf-8'});
    return { headers: httpHeaders };
  }

  private getAuthHeaders() {
    const token = localStorage.getItem('token');
    const httpHeaders = new HttpHeaders(
      {'Authorization': 'JWT ' + token});
    return { headers: httpHeaders };
  }

}
