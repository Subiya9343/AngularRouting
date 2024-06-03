import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { CourseComponent } from './courses/course/course.component';
import { CoursesService } from './Services/courses.service';
import { FormsModule } from '@angular/forms';
import { appRouting } from './appRouting.module';
import { CourseGuardService } from './Services/course-guard.service';
import { AuthService } from './Services/auth.service';
import { LoginComponent } from './login/login.component';
import { CanDeactivateGuardService } from './Services/canDeactivate-guard.service';
import { CourseResolveService } from './Services/course-resolve.service';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './utility/loader/loader.component';
import { SnackbarComponent } from './utility/snackbar/snackbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    HomeComponent,
    ErrorComponent,
    CourseComponent,
    LoginComponent,
    LoaderComponent,
    SnackbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRouting,
    HttpClientModule
  ],
  providers: [CoursesService,AuthService,CourseGuardService,
     CanDeactivateGuardService, CourseResolveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
