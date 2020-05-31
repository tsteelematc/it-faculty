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

  hasSemesterData = true;

  initTabs() {
    // Setup the two maps being used to show the data to the user.
    const groupedByClass = this.loadedSemesters.get(`${this.displaySemester} ${this.displayYear}`)
      .reduce(
        (acc, x) => acc.has(x.class) ? acc.set(x.class, [...acc.get(x.class), x.faculty]) : acc.set(x.class, [x.faculty])
        , new Map()
      )
    ;

    this.currentSemesterByClass = [...groupedByClass]
      .map(x => ({
        class: x[0]
        , faculty: [...x[1]]
      }))
      .sort((a, b) => a.class == b.class ? 0 : a.class < b.class ? -1 : 1)
    ;

    //console.log(this.currentSemesterByClass);

    const groupedByFaculty = this.loadedSemesters.get(`${this.displaySemester} ${this.displayYear}`)
      .reduce(
        (acc, x) => acc.has(x.faculty) ? acc.set(x.faculty, [...acc.get(x.faculty), x.class]) : acc.set(x.faculty, [x.class])
        , new Map()
      )
    ;

    this.currentSemesterByFaculty = [...groupedByFaculty]
      .map(x => ({
        faculty: x[0]
        , classes: [...x[1]]
      }))
      .sort((a, b) => a.faculty == b.faculty ? 0 : a.faculty < b.faculty ? -1 : 1)
    ;

    //console.log(this.currentSemesterByFaculty);
  }
}
