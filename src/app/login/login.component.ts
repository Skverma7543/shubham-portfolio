import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFormFlag:boolean=true
  loginForm!:FormGroup;
  signUpForm!:FormGroup
  constructor() { }

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      'email':new FormControl(null),
      'password':new FormControl(null),
      'rememberMe':new FormControl(null)

    })
    this.signUpForm=new FormGroup({
      'name':new FormControl(null),
      'email':new FormControl(null),
      'password':new FormControl(null),
      'rePassword':new FormControl(null)

    })
  }
  onSubmit(){
    console.log(this.loginForm.value.email)
    console.log(this.loginForm.value.password)
    console.log(this.loginForm.value.rememberMe)
  }
  onSubmitSignUp(){
    console.log(this.signUpForm.value.name)
    console.log(this.signUpForm.value.email)
    console.log(this.signUpForm.value.password)
    console.log(this.signUpForm.value.rePassword)
  }
  openRegisterForm(){
    this.loginFormFlag=false
  }
  gotoSignIn(){
    this.loginFormFlag=true
  }

}
