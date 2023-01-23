import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { User } from '../services/user';
import { UserService } from '../services/users.services';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // myForm!: FormGroup;
  gap = "gap"

  myForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
    confirmPassword: new FormControl('',Validators.required),
    firstname : new FormControl('',Validators.required),
    lastname : new FormControl('',Validators.required),
    gender : new FormControl('',Validators.required),
    country : new FormControl('India'),
    isAccepted: new FormControl('',Validators.requiredTrue)
  });

  isValidFormSubmitted!: boolean;
  user = new User()
  constructor(private userServices : UserService) { }


  ngOnInit(): void { 
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
  }



}
