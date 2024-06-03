import { Component } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { AuthService } from './Services/auth.service';
import { User } from './Model/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularRouting';
  displayLodingIndicator = false;
  isLoggedIn: boolean;
  userSubject: Subscription;

    constructor(private activateRouter: ActivatedRoute,
      private route: Router, private authService: AuthService){ }

  ngOnInit(){
    
    // this.authService.autoLogin();
    
    this.authService.user.subscribe((user: User) => {
      // this.isLoggedIn = this.authService.loggedIn
        this.isLoggedIn = user ? true : false;
    })

    this.activateRouter.fragment.subscribe((value)=> {
        console.log(value);
        this.jumpTo(value);
    })
    
    
    this.route.events.subscribe((routerEvent: Event)=>{
      if(routerEvent instanceof NavigationStart){
        this.displayLodingIndicator = true;
      }

      if(routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationCancel ||
        routerEvent instanceof NavigationError){
        this.displayLodingIndicator = false;
      }
  });
  
  }
  jumpTo(data){
    document.getElementById(data).scrollIntoView({behavior: 'smooth'});
  }

  login(){
    this.authService.login();
  }
  logout(){
    this.authService.logOut();
  }

  ngOnDestroy(){
    this.userSubject.unsubscribe();
  }
}
