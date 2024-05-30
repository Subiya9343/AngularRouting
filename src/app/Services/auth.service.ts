import { HttpClient } from "@angular/common/http";
import { AuthResponse } from "../Model/AuthResponse";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root'})
export class AuthService {

    constructor(private http: HttpClient){ }

    signUp(email, password){
        const data = {email: email, password: password, returnSecureToken: true}
         return this.http.post<AuthResponse>
         ('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBgCIBWmtUgop1OSxKLlMF1AELiEhIjo6I', data)
    }

    // loggedIn:boolean = false;

    // login(){
    //     this.loggedIn = true;
    // }

    // logOut(){
    //     this.loggedIn = false;
    // }

    // IsAuthenticated(){
    //     return this.loggedIn;
    // }
}