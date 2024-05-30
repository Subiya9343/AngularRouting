import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../../Services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {

  course;
  courseId;
  routeObservable;
  editCourseName:Boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private service: CoursesService,
    private route: Router
  ){ }
  
  ngOnInit(): void{
    // this.courseId = this.activatedRoute.snapshot.paramMap.get('id');
    // // this.courseId = this.activatedRoute.snapshot.params['id'];
    // this.course = this.service.courses.find(x => x.id == this.courseId);
    this.routeObservable = this.activatedRoute.paramMap.subscribe((param) => {
       this.courseId = param.get('id');
       this.course = this.service.courses.find(x => x.id == this.courseId);
    })

    // this.editCourseName = Boolean(this.activatedRoute.snapshot.queryParamMap.get('edit'));

    this.activatedRoute.queryParamMap.subscribe((params)=> {
       this.editCourseName = Boolean(params.get('edit'));
       console.log(this.editCourseName);
       
    })
  }

  ngOnDestroy(){
    this.routeObservable.unsubscribe();//explicitly unsubscribe
  }

  OnEdit(){
    this.route.navigate(['Courses/Course/', this.courseId], {queryParams : {edit : true}})
  }
}
