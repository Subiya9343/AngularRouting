import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
// import { CourseComponent } from "../courses/course/course.component";
import { ContactComponent } from "../contact/contact.component";
import { Observable } from "rxjs";

export interface IDeactivate{
    OnExit: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuardService implements CanDeactivate<IDeactivate>{

    canDeactivate(componentCourse:IDeactivate, currentRoute: ActivatedRouteSnapshot){
            return componentCourse.OnExit();
    }
}