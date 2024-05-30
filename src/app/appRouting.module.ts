import { NgModel } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';
// import { CourseGuardService } from "./Services/course-guard.service";

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { CourseComponent } from './courses/course/course.component';
import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { CanDeactivateGuardService } from "./Services/canDeactivate-guard.service";
import { HttpClientModule } from "@angular/common/http";
import { CourseResolveService } from "./Services/course-resolve.service";

const appRoute: Routes = [
    //{path: '', component: HomeComponent},
    {path: '', redirectTo: 'Home', pathMatch: 'full'},
    {path: 'Home', component: HomeComponent},
    {path: 'About', component: AboutComponent},
    {path: 'Contact', component: ContactComponent, canDeactivate: [CanDeactivateGuardService]},
    // {path: 'Courses', component: CoursesComponent, canActivate: [CourseGuardService]},
    {path: 'Courses', component: CoursesComponent},//, resolve: {courses: CourseResolveService}
    {path: 'Login', component: LoginComponent},
    // {path: 'Courses/Course/:id', component: CourseComponent},
    {path: 'Courses', children: [       // ,canActivateChild: [CourseGuardService]
      {path: 'Course/:id', component: CourseComponent}
    ]},
    {path: '**', component: ErrorComponent}
  ]

@NgModule({
    imports:[
        RouterModule.forRoot(appRoute, {enableTracing: true})
    ],
    exports:[
        RouterModule
    ]
})
export class appRouting{

}