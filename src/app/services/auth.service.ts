import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http:HttpClient) { }

  // headers= new HttpHeaders()
  // .set('content-type', 'application/json')
  // .set('Access-Control-Allow-Origin', environment.ApiUrl);



  signup(data:any):Observable<any>{
    return this.http.post("http://localhost:3000/user/signup",data,)
  }

  signin(data:any):Observable<any>{
    return this.http.post("http://localhost:3000/user/login",data,) 
  }
 
}
