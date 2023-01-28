import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  className = "d-none"
  isProcess:boolean = false;
  message: string = "";

  constructor(private fb:FormBuilder,private auth:AuthService) { 
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:["",Validators.required],
      password:["",Validators.required],
    })
  }

  login(){
    this.isProcess = true
    const data = this.loginForm.value;
    delete data["confirm"]
    this.auth.signin(data).subscribe(res => {
      if(res.success){
        this.isProcess = false;
        this.message = "Login Successfull !!";
        this.className = "alert alert-success";
        localStorage.setItem('token',res.token)
        alert(res.message)
      }
      else{
        this.isProcess = false;
        this.message = res.message;
        this.className = "alert alert-danger";
        alert(res.message)
      }
    },err=>{
      this.isProcess = false;
      this.message = "Server Error!!";
      this.className = "alert alert-danger"
      alert({error:err})
    }
    )
  }

}
