import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public coursesSvc: CoursesService) {}

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

  loadedSemesters = new Map<string, any[]>();
  currentSemesterByClass = [];
  currentSemesterByFaculty = [];

  async previousSemester() {
      // First check semester to see if we have to switch the year.
      if (this.displaySemester == 'Spring') {
        this.displaySemesterIndex = 2;
        this.displayYear--;
      } 
      else {
        this.displaySemesterIndex--
      }

      // Once we have the proper semester and year setup, load the data if needed.
      try {

        if (!this.loadedSemesters.has(`${this.displaySemester} ${this.displayYear}`)) {
          const loadedSemester = await this.coursesSvc.loadCourses(`${this.displaySemester} ${this.displayYear}`);
          //console.log(loadedSemester);
          this.loadedSemesters.set(`${this.displaySemester} ${this.displayYear}`, loadedSemester)
          //console.log(this.loadedSemesters.get(`${this.displaySemester} ${this.displayYear}`));
        }
      }

      catch (err) {
        console.error(err);
      }

      finally {
        this.initTabs();
      }
  }

  async nextSemester() {
      // First check semester to see if we have to switch the year.
      if (this.displaySemester == 'Fall') {
        this.displaySemesterIndex = 0;
        this.displayYear++;
      } 
      else {
        this.displaySemesterIndex++
      }

      // Once we have the proper semester and year setup, load the data if needed.
      try {

        if (!this.loadedSemesters.has(`${this.displaySemester} ${this.displayYear}`)) {
          this.coursesSvc.testCallApiGateway();
          const loadedSemester = await this.coursesSvc.loadCourses(`${this.displaySemester} ${this.displayYear}`);
          //console.log(loadedSemester);
          //console.log(JSON.stringify(loadedSemester));
          this.loadedSemesters.set(`${this.displaySemester} ${this.displayYear}`, loadedSemester)
          //console.log(this.loadedSemesters.get(`${this.displaySemester} ${this.displayYear}`));
        }
      }

      catch (err) {
        console.error(err);
      }

      finally {
        this.initTabs();
      }
  }

  initTabs() {

    console.log(JSON.stringify(this.loadedSemesters.get(`${this.displaySemester} ${this.displayYear}`)));
    
    // Data is essentially in 'by class' shape, so no reduce, just unique and sort...
    this.currentSemesterByClass = this.loadedSemesters.get(`${this.displaySemester} ${this.displayYear}`)
      .map(x => ({
        class: x.class
        , faculty: new Set([...x.faculty].sort())
      }))
      .sort((a, b) => a.class == b.class ? 0 : a.class < b.class ? -1 : 1)
    ;

    //console.log(this.currentSemesterByClass);

    const groupedByFaculty = this.loadedSemesters.get(`${this.displaySemester} ${this.displayYear}`)
      .reduce(
        (acc, x) => [
          ...acc
          , ...x.faculty.map(y => ({
            class: x.class 
            , faculty: y
          }))
        ]
        , []
      )
      .reduce(
        (acc, x) => acc.has(x.faculty) 
          ? acc.set(x.faculty, [...acc.get(x.faculty), x.class]) 
          : acc.set(x.faculty, [x.class])
        , new Map()
      )
    ;

    this.currentSemesterByFaculty = [...groupedByFaculty]
      .map(x => ({
        faculty: x[0]
        , classes: [...x[1]].sort()
      }))
      .sort((a, b) => a.faculty == b.faculty ? 0 : a.faculty < b.faculty ? -1 : 1)
    ;

    //console.log(this.currentSemesterByFaculty);
  }
}
