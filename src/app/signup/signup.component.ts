import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup , Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
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
  className = "d-none"
  isProcess:boolean = false;

  isValidFormSubmitted!: boolean;
  user = new User();
  message: string = "";
  constructor(private userServices : UserService,private fb: FormBuilder,private auth:AuthService) { }


  ngOnInit(): void { 
    this.myForm = this.fb.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]],
      confirmPassword: ['',Validators.required],
      firstname : ['',Validators.required],
      lastname : ['',Validators.required],
      gender : ['',Validators.required],
      country : ['Country'],
      isAccepted: ['',Validators.requiredTrue],
      isNewsAccepted: ["false"]
    },
    {
      validators:ConfirmPasswordValidator("password","confirmPassword")
    }
    );
  }

  onSubmit(){
    // this.isValidFormSubmitted = false;
    // if(this.myForm.invalid){
    //   return;	
    // } 	
    // this.isValidFormSubmitted = true;
    // console.log(this.myForm.valid);
    // this.user.email = this.myForm.get('email')?.value!;
	  // this.user.password = this.myForm.get('password')?.value!;
	  // this.user.firstname = this.myForm.get('firstname')?.value!;
	  // this.user.lastname = this.myForm.get('lastname')?.value!;
    // this.user.gender = this.myForm.get("gender")?.value!;
    // this.user.country = this.myForm.get("country")?.value!;
    // this.user.isAccepted = this.myForm.get("isAccepted")?.value;
    // this.user.isNewsAccepted =  this.myForm.get("isNewsAccepted")?.value;
	  // this.userServices.createUser(this.user);
    // this.myForm.reset({country:"Country"})

    this.isProcess = true
    const data = this.myForm.value;
    delete data["confirm"]
    this.auth.signup(data).subscribe(res=>{
      if(res.success){
        this.isProcess = false;
        this.message = "Account Has Been Created";
        this.className = "alert alert-success";
        alert(res.message)
      }else{
        this.isProcess = false;
        this.message = res.message;
        this.className = "alert alert-danger";
        alert(res.message)
      }
      this.myForm.reset({country:"Country"})
    },
    err => {
      this.isProcess = false;
      this.message = "Server Error!!";
      this.className = "alert alert-danger"
      alert({error:err})
    }
    )
  }

  
}



