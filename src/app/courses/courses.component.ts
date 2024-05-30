import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../Services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

  constructor(private activatedRoute: ActivatedRoute, private service: CoursesService){ }

  courses: {id: Number,
        name: String,
        author: String,
        duration: String,
        type: String,
        price: Number,
        rating: Number,
        image: String,
        description: String}[] = [];

  ngOnInit(){
    // this.courses = this.service.courses;

    // this.service.getAllCourses().then((data)=>{
    //   this.courses = data;
    // })

    this.courses = this.activatedRoute.snapshot.data['courses']
  
    // this.service.courses({ id: Number, name: String, author: String, duration: String, type: String,
    // price: Number, rating: Number, image: String, description: String });
  }
}
