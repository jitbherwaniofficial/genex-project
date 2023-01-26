"use strict";(self.webpackChunkGenex_project_1=self.webpackChunkGenex_project_1||[]).push([[933],{933:(L,m,a)=>{a.r(m),a.d(m,{SignupModule:()=>R});var s=a(895),d=a(736),l=a(433);class F{}function w(n,r){return o=>{let i=o.controls[r];i.errors&&!i.errors.confirmPasswordValidator||i.setErrors(o.controls[n].value!==i.value?{confirmPasswordValidator:!0}:null)}}var e=a(256);let u=(()=>{class n{createUser(o){console.log("Email: "+o.email),console.log("Password: "+o.password),console.log("Confirm Password: "+o.confirmPassword),console.log("First Name: "+o.firstname),console.log("Last Name: "+o.lastname),console.log("Gender?: "+o.gender),console.log("Country: "+o.country),console.log("isAccepted?: "+o.isAccepted)}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})();function T(n,r){1&n&&(e.TgZ(0,"small",46),e._uU(1," email is required. "),e.qZA()),2&n&&e.Q6J("ngClass","error")}function q(n,r){1&n&&(e.TgZ(0,"small",46),e._uU(1," please provide a proper email. "),e.qZA()),2&n&&e.Q6J("ngClass","error")}function A(n,r){1&n&&(e.TgZ(0,"small",46),e._uU(1," password is required. "),e.qZA()),2&n&&e.Q6J("ngClass","error")}function U(n,r){1&n&&(e.TgZ(0,"small",46),e._uU(1," password must be atleast 5 character. "),e.qZA()),2&n&&e.Q6J("ngClass","error")}function k(n,r){1&n&&(e.TgZ(0,"small",46),e._uU(1," password must be below 20 character. "),e.qZA()),2&n&&e.Q6J("ngClass","error")}function P(n,r){1&n&&(e.TgZ(0,"small",46),e._uU(1," please confirm your password. "),e.qZA()),2&n&&e.Q6J("ngClass","error")}function N(n,r){1&n&&(e.TgZ(0,"small",47),e._uU(1,"Password and Confirm Password didn't match. "),e.qZA())}function J(n,r){1&n&&(e.TgZ(0,"small",46),e._uU(1," first name is required. "),e.qZA()),2&n&&e.Q6J("ngClass","error")}function I(n,r){1&n&&(e.TgZ(0,"small",46),e._uU(1," last name is required. "),e.qZA()),2&n&&e.Q6J("ngClass","error")}function M(n,r){1&n&&(e.TgZ(0,"small",46),e._uU(1," first name is required. "),e.qZA()),2&n&&e.Q6J("ngClass","error")}function V(n,r){1&n&&(e.TgZ(0,"small",46),e._uU(1," last name is required. "),e.qZA()),2&n&&e.Q6J("ngClass","error")}function x(n,r){1&n&&(e.TgZ(0,"small",46),e._uU(1," gender is required. "),e.qZA()),2&n&&e.Q6J("ngClass","error")}function Q(n,r){1&n&&(e.TgZ(0,"small",46),e._uU(1," accept terms and conditions "),e.qZA()),2&n&&e.Q6J("ngClass","error")}const O=function(n){return{gap:n}},Y=[{path:"",component:(()=>{class n{constructor(o,t){this.userServices=o,this.fb=t,this.gap="gap",this.user=new F}ngOnInit(){this.myForm=this.fb.group({email:["",[l.kI.required,l.kI.email]],password:["",[l.kI.required,l.kI.minLength(5),l.kI.maxLength(20)]],confirmPassword:["",l.kI.required],firstname:["",l.kI.required],lastname:["",l.kI.required],gender:["",l.kI.required],country:["Country"],isAccepted:["",l.kI.requiredTrue]},{validators:w("password","confirmPassword")})}onSubmit(){this.isValidFormSubmitted=!1,!this.myForm.invalid&&(this.isValidFormSubmitted=!0,console.log(this.myForm.valid),this.user.email=this.myForm.get("email")?.value,this.user.password=this.myForm.get("password")?.value,this.user.firstname=this.myForm.get("firstname")?.value,this.user.lastname=this.myForm.get("lastname")?.value,this.user.gender=this.myForm.get("gender")?.value,this.user.country=this.myForm.get("country")?.value,this.user.isAccepted=this.myForm.get("isAccepted")?.value,this.userServices.createUser(this.user),this.myForm.reset({country:"Country"}))}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(u),e.Y36(l.qu))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-signup"]],decls:89,vars:17,consts:[[1,"background"],[1,"card"],[1,"card-header"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"input-group","mb-4","px-3"],["id","basic-addon1",1,"input-group-text"],[1,"fa-solid","fa-envelope"],["type","text","placeholder","Email","aria-label","Email","aria-describedby","basic-addon1","formControlName","email",1,"form-control"],["class","text-danger",3,"ngClass",4,"ngIf"],[1,"fa-solid","fa-lock"],["type","password","placeholder","Password","aria-label","Password","aria-describedby","basic-addon1","formControlName","password",1,"form-control"],["type","password","placeholder","Re-type Password","aria-label","Re-type Password","aria-describedby","basic-addon1","formControlName","confirmPassword",1,"form-control"],["class","text-danger",4,"ngIf"],[1,"input-group","mb-4","px-3","SHOW"],[1,"input-group-text"],[1,"fa-solid","fa-user"],["type","text","placeholder","First Name","aria-label","First Name","formControlName","firstname",1,"form-control",3,"ngClass"],["type","text","placeholder","Last Name","aria-label","Last Name","formControlName","lastname",1,"form-control"],[1,"input-group","mb-4","px-3","HIDE"],["type","text","placeholder","First Name","aria-label","First Name","aria-describedby","basic-addon1","formControlName","firstname",1,"form-control"],["type","text","placeholder","Last Name","aria-label","Last Name","aria-describedby","basic-addon1","formControlName","lastname",1,"form-control"],[1,"input-group","mb-3","px-3"],[1,"form-check"],["type","radio","value","Male","id","flexRadioDefault1","formControlName","gender","checked","",1,"form-check-input"],["for","Male",1,"form-check-label"],["type","radio","value","Female","id","flexRadioDefault2","formControlName","gender",1,"form-check-input"],["for","Female",1,"form-check-label"],[1,"mx-3"],["aria-label","Default select example","formControlName","country",1,"form-select","mt-4"],["selected",""],["value","1"],["value","2"],["value","3"],["value","4"],["value","5"],["value","6"],["value","7"],["value","8"],["value","9"],[1,"form-check","mt-4","mx-3"],["type","checkbox","value","","id","defaultCheck1","formControlName","isAccepted",1,"form-check-input"],["for","defaultCheck1",1,"form-check-label"],["type","checkbox","value","","id","defaultCheck2","formControlName","isAccepted",1,"form-check-input"],["for","defaultCheck2",1,"form-check-label"],["type","submit",1,"btn","mt-4","mb-4"],[1,"text-danger",3,"ngClass"],[1,"text-danger"]],template:function(o,t){if(1&o&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"div",2),e.TgZ(3,"div",3)(4,"h1"),e._uU(5,"Responsive Registration Form"),e.qZA(),e.TgZ(6,"form",4),e.NdJ("ngSubmit",function(){return t.onSubmit()}),e.TgZ(7,"div",5)(8,"span",6),e._UZ(9,"i",7),e.qZA(),e._UZ(10,"input",8),e.YNc(11,T,2,1,"small",9),e.YNc(12,q,2,1,"small",9),e.qZA(),e.TgZ(13,"div",5)(14,"span",6),e._UZ(15,"i",10),e.qZA(),e._UZ(16,"input",11),e.YNc(17,A,2,1,"small",9),e.YNc(18,U,2,1,"small",9),e.YNc(19,k,2,1,"small",9),e.qZA(),e.TgZ(20,"div",5)(21,"span",6),e._UZ(22,"i",10),e.qZA(),e._UZ(23,"input",12),e.YNc(24,P,2,1,"small",9),e.YNc(25,N,2,0,"small",13),e.qZA(),e.TgZ(26,"div",14)(27,"span",15),e._UZ(28,"i",16),e.qZA(),e._UZ(29,"input",17),e.YNc(30,J,2,1,"small",9),e.TgZ(31,"span",15),e._UZ(32,"i",16),e.qZA(),e._UZ(33,"input",18),e.YNc(34,I,2,1,"small",9),e.qZA(),e.TgZ(35,"div",19)(36,"span",6),e._UZ(37,"i",16),e.qZA(),e._UZ(38,"input",20),e.YNc(39,M,2,1,"small",9),e.qZA(),e.TgZ(40,"div",19)(41,"span",6),e._UZ(42,"i",16),e.qZA(),e._UZ(43,"input",21),e.YNc(44,V,2,1,"small",9),e.qZA(),e.TgZ(45,"div",22)(46,"div",23),e._UZ(47,"input",24),e.TgZ(48,"label",25),e._uU(49," Male "),e.qZA()(),e.TgZ(50,"div",23),e._UZ(51,"input",26),e.TgZ(52,"label",27),e._uU(53," Female "),e.qZA()(),e.YNc(54,x,2,1,"small",9),e.qZA(),e.TgZ(55,"div",28)(56,"select",29)(57,"option",30),e._uU(58,"Country"),e.qZA(),e.TgZ(59,"option",31),e._uU(60,"India"),e.qZA(),e.TgZ(61,"option",32),e._uU(62,"U.S.A"),e.qZA(),e.TgZ(63,"option",33),e._uU(64,"Germany"),e.qZA(),e.TgZ(65,"option",34),e._uU(66,"Canada"),e.qZA(),e.TgZ(67,"option",35),e._uU(68,"Ireland"),e.qZA(),e.TgZ(69,"option",36),e._uU(70,"England"),e.qZA(),e.TgZ(71,"option",37),e._uU(72,"Australia"),e.qZA(),e.TgZ(73,"option",38),e._uU(74,"South Africa"),e.qZA(),e.TgZ(75,"option",39),e._uU(76,"Turkey"),e.qZA()()(),e.TgZ(77,"div",40),e._UZ(78,"input",41),e.TgZ(79,"label",42),e._uU(80," I agree with terms and conditions. "),e.qZA(),e.YNc(81,Q,2,1,"small",9),e.qZA(),e.TgZ(82,"div",40),e._UZ(83,"input",43),e.TgZ(84,"label",44),e._uU(85," I want to receive the newsletter. "),e.qZA()(),e.TgZ(86,"div",28)(87,"button",45),e._uU(88,"Register"),e.qZA()()()()()()),2&o){let i,p,c,g,f,_,h,Z,b,C,y,v,S;e.xp6(6),e.Q6J("formGroup",t.myForm),e.xp6(5),e.Q6J("ngIf",(null==(i=t.myForm.get("email"))?null:i.hasError("required"))&&null!=t.isValidFormSubmitted&&!t.isValidFormSubmitted),e.xp6(1),e.Q6J("ngIf",(null==(p=t.myForm.get("email"))?null:p.hasError("email"))&&null!=t.isValidFormSubmitted&&!t.isValidFormSubmitted),e.xp6(5),e.Q6J("ngIf",(null==(c=t.myForm.get("password"))?null:c.hasError("required"))&&null!=t.isValidFormSubmitted&&!t.isValidFormSubmitted),e.xp6(1),e.Q6J("ngIf",(null==(g=t.myForm.get("password"))?null:g.hasError("minlength"))&&null!=t.isValidFormSubmitted&&!t.isValidFormSubmitted),e.xp6(1),e.Q6J("ngIf",(null==(f=t.myForm.get("password"))?null:f.hasError("maxlength"))&&null!=t.isValidFormSubmitted&&!t.isValidFormSubmitted),e.xp6(5),e.Q6J("ngIf",(null==(_=t.myForm.get("confirmPassword"))?null:_.invalid)&&null!=t.isValidFormSubmitted&&!t.isValidFormSubmitted),e.xp6(1),e.Q6J("ngIf",null==(h=t.myForm.get("confirmPassword"))?null:h.hasError("confirmPasswordValidator")),e.xp6(4),e.Q6J("ngClass",e.VKq(15,O,null==t.isValidFormSubmitted)),e.xp6(1),e.Q6J("ngIf",(null==(Z=t.myForm.get("firstname"))?null:Z.invalid)&&null!=t.isValidFormSubmitted&&!t.isValidFormSubmitted),e.xp6(4),e.Q6J("ngIf",(null==(b=t.myForm.get("lastname"))?null:b.invalid)&&null!=t.isValidFormSubmitted&&!t.isValidFormSubmitted),e.xp6(5),e.Q6J("ngIf",(null==(C=t.myForm.get("firstname"))?null:C.invalid)&&null!=t.isValidFormSubmitted&&!t.isValidFormSubmitted),e.xp6(5),e.Q6J("ngIf",(null==(y=t.myForm.get("lastname"))?null:y.invalid)&&null!=t.isValidFormSubmitted&&!t.isValidFormSubmitted),e.xp6(10),e.Q6J("ngIf",(null==(v=t.myForm.get("gender"))?null:v.invalid)&&null!=t.isValidFormSubmitted&&!t.isValidFormSubmitted),e.xp6(27),e.Q6J("ngIf",(null==(S=t.myForm.get("isAccepted"))?null:S.invalid)&&null!=t.isValidFormSubmitted&&!t.isValidFormSubmitted)}},dependencies:[s.mk,s.O5,l._Y,l.YN,l.Kr,l.Fj,l.Wl,l.EJ,l._,l.JJ,l.JL,l.sg,l.u],styles:[".background[_ngcontent-%COMP%]{background-color:#d4cdcd;width:100vw;height:100vh;display:flex;justify-content:center;align-items:center}.card[_ngcontent-%COMP%]{width:30vw}.card-header[_ngcontent-%COMP%]{background-color:#ff9c1b;border:none}.card-body[_ngcontent-%COMP%]{padding:0 20px}h1[_ngcontent-%COMP%]{padding:1.5rem 2rem;letter-spacing:2px;width:28vw;text-align:center;font-size:2rem;font-weight:700}.form-check[_ngcontent-%COMP%]{padding-right:20px}.gap[_ngcontent-%COMP%]{margin:0 2rem}.form-control[_ngcontent-%COMP%]{height:40px;color:#a5a5a5}.form-select[_ngcontent-%COMP%]{height:48px;color:#757575}.btn[_ngcontent-%COMP%]{width:100%;background-color:#ff9c1b;color:#fff}.HIDE[_ngcontent-%COMP%]{display:none}small[_ngcontent-%COMP%]{display:block!important;width:100%!important}@media only screen and (max-width:1630px){.background[_ngcontent-%COMP%]{background-color:#d4cdcd;width:100vw;height:100%;display:flex;justify-content:center;align-items:center;padding-top:3rem;padding-bottom:3rem}.card[_ngcontent-%COMP%]{width:40vw}h1[_ngcontent-%COMP%]{padding:1rem 1.5rem;letter-spacing:2px;width:38vw;text-align:center;font-size:2rem;font-weight:700}.gap[_ngcontent-%COMP%]{margin:0 1.5rem}}@media only screen and (max-width:1000px){.background[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0}.card[_ngcontent-%COMP%]{width:100vw;height:100vh}.card-body[_ngcontent-%COMP%]{padding:0}h1[_ngcontent-%COMP%]{width:98vw;font-size:1.5rem}.HIDE[_ngcontent-%COMP%]{display:flex}.SHOW[_ngcontent-%COMP%]{display:none}}"]}),n})()}];let E=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.Bz.forChild(Y),d.Bz]}),n})(),R=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[u],imports:[s.ez,E,l.UX]}),n})()}}]);