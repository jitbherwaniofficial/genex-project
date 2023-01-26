import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup , Validators } from '@angular/forms';
import { User } from '../services/user';
import { UserService } from '../services/users.services';
import { ConfirmPasswordValidator } from './confirmPassword.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myForm!: FormGroup;
  gap = "gap"

  

  isValidFormSubmitted!: boolean;
  user = new User();
  constructor(private userServices : UserService,private fb: FormBuilder) { }


  ngOnInit(): void { 
    this.myForm = this.fb.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]],
      confirmPassword: ['',Validators.required],
      firstname : ['',Validators.required],
      lastname : ['',Validators.required],
      gender : ['',Validators.required],
      country : ['Country'],
      isAccepted: ['',Validators.requiredTrue]
    },
    {
      validators:ConfirmPasswordValidator("password","confirmPassword")
    }
    );
  }

  onSubmit(){
    this.isValidFormSubmitted = false;
    if(this.myForm.invalid){
      return;	
    } 	
    this.isValidFormSubmitted = true;
    console.log(this.myForm.valid);
    this.user.email = this.myForm.get('email')?.value!;
	  this.user.password = this.myForm.get('password')?.value!;
	  this.user.firstname = this.myForm.get('firstname')?.value!;
	  this.user.lastname = this.myForm.get('lastname')?.value!;
    this.user.gender = this.myForm.get("gender")?.value!;
    this.user.country = this.myForm.get("country")?.value!;
    this.user.isAccepted = this.myForm.get("isAccepted")?.value;
	  this.userServices.createUser(this.user);
    this.myForm.reset({country:"Country"})
  }

  
}



