import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token! :any ;
  httpOptions:any;

  constructor(private http:HttpClient) { }

  // headers= new HttpHeaders()
  // .set('content-type', 'application/json')
  // .set('Access-Control-Allow-Origin', '*');

  post(serviceName : string, data:any){
    this.token =  localStorage.getItem('token');
    if(this.token != null || this.token != undefined || this.token != "" ){
      this.httpOptions = {
        headers: new HttpHeaders({
          "Access-Control-Allow-Origin": '*',
          'Accept' : 'application/json, text/plain',
          'Authorization' : `Bearer ${this.token}`
        })
      }
    }else{
      this.httpOptions = {
        headers: new HttpHeaders({
          "Access-Control-Allow-Origin": '*',
          'Accept' : 'application/json, text/plain',
        })
      }
    }

    const url = environment.apiUrl + serviceName;
    return  this.http.post(url,  data, this.httpOptions);

  }

  signup(data:any):Observable<any>{
    return this.http.post('/signup',data)
  }

  signin(data:any):Observable<any>{
    return this.http.post('/login',data,) //{ 'headers': this.headers }
  }
 
}
