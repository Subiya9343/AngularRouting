import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import { Observable } from 'rxjs';
import { AuthResponse } from '../Model/AuthResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLogin: boolean = true;
  isLoadingg: boolean = false;
  errorMessage: string | null = null; 
  authObs:Observable<AuthResponse>

  constructor(private authService: AuthService, private router: Router){ }

@ViewChild('authForm') form: NgForm;

  onSwitchMode(){
    this.isLogin = !this.isLogin;
  }

  OnSubmit(){
    console.log("on Submit called.....");
    const email = this.form.value.email;
    const pass= this.form.value.pass;
    if(this.isLogin){
      this.isLoadingg = true
      this.authObs = this.authService.logIn(email, pass);
    }else{
      this.isLoadingg = true
      this.authObs = this.authService.signUp(email, pass);
    }

    this.authObs.subscribe(
      {next: (res) => {
        console.log(res);
        this.isLoadingg = false
        this.router.navigate(['/Courses'])
      }, 
      error: (errMsg) => {
        this.isLoadingg = false;
        this.errorMessage = errMsg;
        this.hideSnackBar()
      }}
    )
    this.form.reset()
  }
  hideSnackBar(){
    setTimeout(() =>{
      this.errorMessage = null;
    }, 3000);
  }
}
