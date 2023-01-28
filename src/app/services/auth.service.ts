import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

  signup(data:any):Observable<any>{
    return this.http.post('https://genex-api.onrender.com/user/signup',data,{ 'headers': this.headers })
  }

  signin(data:any):Observable<any>{
    return this.http.post('https://genex-api.onrender.com/user/login',data,{ 'headers': this.headers })
  }
 
}
