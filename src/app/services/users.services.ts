import { Injectable } from '@angular/core';

import { User } from './user';

@Injectable()
export class UserService {
   createUser(user: User) {
        //Log user data in console
        console.log("Email: " + user.email);
	    console.log("Password: " + user.password);
	    console.log("Confirm Password: " + user.confirmPassword);
	    console.log("First Name: " + user.firstname);
	    console.log("Last Name: " + user.lastname);
	    console.log("Gender?: " + user.gender);
	    console.log("Country: " + user.country);
	    console.log("isAccepted?: " + user.isAccepted);
   }   
}