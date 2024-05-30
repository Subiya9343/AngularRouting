import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  constructor(private route: Router){ }

  navigateHome(){
    // this.route.navigate(['Home']);
    this.route.navigateByUrl('Home')
  }
}
