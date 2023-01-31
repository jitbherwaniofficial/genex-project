import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http:HttpClient) { }

  headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', environment.apiUrl);

  


  signup(data:any):Observable<any>{
    return this.http.post(`${environment.apiUrl}/user/signup`,data,{headers:this.headers})
  }

  signin(data:any):Observable<any>{
    return this.http.post(`${environment.apiUrl}/user/login`,data,{headers:this.headers}) 
  }
 
}
