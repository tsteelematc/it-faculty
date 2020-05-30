import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private coursesSvc: CoursesService) {}

  title = 'it-faculty';

  semesters = [
    'Spring'
    , 'Summer'
    , 'Fall'
  ];

  displaySemesterIndex = 2;

  get displaySemester() {
    return this.semesters[this.displaySemesterIndex];
  }

  displayYear = 2020;

  previousSemester() {
      // First check semester to see if we have to switch the year.
      if (this.displaySemester == 'Spring') {
        this.displaySemesterIndex = 2;
        this.displayYear--;
      } 
      else {
        this.displaySemesterIndex--
      }

      this.coursesSvc.loadCourses();
  }

  nextSemester() {
      // First check semester to see if we have to switch the year.
      if (this.displaySemester == 'Fall') {
        this.displaySemesterIndex = 0;
        this.displayYear++;
      } 
      else {
        this.displaySemesterIndex++
      }

      this.coursesSvc.loadCourses();
  }

  hasSemesterData = false;
}
