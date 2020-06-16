import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public coursesSvc: CoursesService) {
    this.nextSemester();
  }

  title = 'it-faculty';

  semesters = [
    'Spring'
    , 'Summer'
    , 'Fall'
  ];

  displaySemesterIndex = 0;

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
          // Make sure after the async call, that we set the proper data...
          // Without these constants, a user could press the buttons many times and 
          // get data updated for the currently displayed semester, but that was
          // not the semester that had been fetched ! ! !
          const fetchingDataForSemester = this.displaySemester;
          const fetchingDataForYear = this.displayYear;

          const loadedSemester = await this.coursesSvc.loadCourses(`${this.displaySemester} ${this.displayYear}`);
          //console.log(loadedSemester);
          this.loadedSemesters.set(`${fetchingDataForSemester} ${fetchingDataForYear}`, loadedSemester)
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
        (acc: Map<string, Map<string, number>>, x) => acc.has(x.faculty) 
          ? acc.set(x.faculty, acc.get(x.faculty).set(x.class, acc.get(x.faculty).has(x.class)
            ? acc.get(x.faculty).get(x.class) + 1
            : 1)) 
          : acc.set(x.faculty, new Map().set(x.class, 1))
        , new Map<string, Map<string, number>>()
      )
    ;

    console.log([...groupedByFaculty]);

    this.currentSemesterByFaculty = [...groupedByFaculty]
      .map(x => ({
        faculty: x[0]
        , classes: [...x[1]].map(y => ({ class: y[0], numberOfSections: y[1]})).sort((a, b) => a.class == b.class ? 0 : a.class < b.class ? -1 : 1)
      }))
      .sort((a, b) => a.faculty == b.faculty ? 0 : a.faculty < b.faculty ? -1 : 1)
    ;

    //console.log(this.currentSemesterByFaculty);
  }
}
