import { Component } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
// import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularRouting';
  displayLodingIndicator = false;

  // constructor(private activateRouter: ActivatedRoute, private authService: AuthService,
  //   private route: Router){ }
    constructor(private activateRouter: ActivatedRoute,
      private route: Router){ }

  ngOnInit(){
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

  // login(){
  //   this.authService.login();
  // }
  // logout(){
  //   this.authService.logOut();
  // }
}
