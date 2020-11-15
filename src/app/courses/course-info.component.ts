import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './app.component';
import { CourseService } from './course.service';

@Component({
    templateUrl: './course-info.component.html',
    styleUrls:['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {

    course: Course;
   // activatedRoute busca o parametro escolhido dna rota que esta ativa  
    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) { }
    //pega parametro id
    ngOnInit(): void { 
        this.course = this.courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id'));
    }
    save(): void {
        this.courseService.save(this.course);
    }

}