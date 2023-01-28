import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  // headers= new HttpHeaders()
  // .set('content-type', 'application/json')
  // .set('Access-Control-Allow-Origin', '*');

  signup(data:any):Observable<any>{
    return this.http.post('/signup',data)
  }

  signin(data:any):Observable<any>{
    return this.http.post('/login',data,) //{ 'headers': this.headers }
  }
 
}
