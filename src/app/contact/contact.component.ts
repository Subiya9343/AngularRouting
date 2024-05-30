import { Component } from '@angular/core';
import { IDeactivate } from '../Services/canDeactivate-guard.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements IDeactivate{

  firstname;
  lastname;

  OnExit(){
    if(this.firstname || this.lastname){
      return confirm("You may have unsaved changes");
    }else{
      return true;
    }
  }
}
