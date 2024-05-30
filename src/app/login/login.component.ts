import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLogin: boolean = true;

  constructor(private authService: AuthService){ }

@ViewChild('authForm') form: NgForm;

  onSwitchMode(){
    this.isLogin = !this.isLogin;
  }

  OnSubmit(){
    // console.log(this.form.value);
    const email = this.form.value.email;
    const pass= this.form.value.pass;
    if(this.isLogin){
      return
    }else{
      this.authService.signUp(email, pass).subscribe((res) =>{
         console.log(res);
      }
    )
    }
    this.form.reset()
  }
}
