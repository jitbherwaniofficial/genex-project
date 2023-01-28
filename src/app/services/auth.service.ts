import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  signup(data:any):Observable<any>{
    return this.http.post('https://genex-api.onrender.com/user/signup',data)
  }

  signin(data:any):Observable<any>{
    return this.http.post('https://genex-api.onrender.com/user/login',data)
  }
 
}
