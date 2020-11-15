import { Component } from '@angular/core'
import { Course } from './app.component'
import { CourseService } from './course.service';

@Component({
    
    templateUrl: './course-list.component.html'
})
export class CourselistComponent {

    filteredCourses: Course[] = []

    _courses: Course[] = [];

    _filterby: string

    constructor( private courseService: CourseService) {}

    ngOnInit(): void {
        this._courses = this.courseService.retrieveAll();
        this.filteredCourses = this._courses
        
    }

    set filter(value: string) {
        this._filterby = value;

        this.filteredCourses = this._courses.filter((course:Course) => course.name.toLocaleLowerCase().indexOf(this._filterby.toLocaleLowerCase())> -1 )
    }

    get filter() {
        return this._filterby;
    }

}