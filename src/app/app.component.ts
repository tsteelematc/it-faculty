import { Component } from '@angular/core';
import { CoursesService, UserClass } from './courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';

interface DisplayByClassData {
  class: string;
  faculty: {
    faculty: string   // Hacked to show multiple sessions, for now ! ! !
    , checked: boolean
  }[];    
}

interface DisplayByFacultyData {
  faculty: string;
  classes: {
    class: string   // Hacked to show multiple sessions, for now ! ! !
    , numberOfSections: number
    , checked: boolean
  }[];    
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  classesForUser: UserClass[] = [];

  constructor(
    public coursesSvc: CoursesService
    , private snackBar: MatSnackBar
  ) {
    //this.coursesSvc.testCallApiGateway();

    // this.coursesSvc.writeItem({ 
    //   key: "Tom"
    //   , foo: "Bar"
    // });

    //this.nextSemester();
    //this.previousSemester();
    //console.log(this.displayYear);
    //console.log(this.displaySemesterIndex);

    this.classesForUser = this.coursesSvc.loadUserClassesMock("tsteele@madisoncollege.edu");

    this.loadAndInitializeTab(); 
  }

  refresh() {
    const sb = this.snackBar.open(
      'Refresh to clear & reload data'
      , 'Refresh'
      , {
        duration: 3500,
      }
    );

    sb.onAction().subscribe(() => {
      //console.log("Pressed refresh...");
      this.loadedSemesters.clear();
      this.loadAndInitializeTab();
    });
  }

  title = 'it-faculty';

  semesters = [
    'Spring'
    , 'Summer'
    , 'Fall'
  ];

  get displaySemester() {
    return this.semesters[this.displaySemesterIndex];
  }

  //
  // Try initializing these better ! ! !
  //
  // For example, if month is Dec, show Spring of next year...
  //
  // If month is Aug, show Fall of current year...
  //
  // If month is May, show Summer of current year...
  //
  // Otherwise... ? ? ?
  //
  // Maybe just map month to semester to show, and sometimes year + 1... 
  //
  // Hmm, i-o-g...
  //

  // This will get turned into a Map for lookup ! ! ! i-o-g... idiot, just use array and array index... meh...
  yearSemesterLookupByMonthData = [
    // Jan
    {
      displaySemesterIndex: 0
      , yearOffset: 0
    }
    // Feb
    , {
      displaySemesterIndex: 0
      , yearOffset: 0
    }
    // March
    , {
      displaySemesterIndex: 0
      , yearOffset: 0
    }
    // April
    , {
      displaySemesterIndex: 0
      , yearOffset: 0
    }
    // May
    , {
      displaySemesterIndex: 1
      , yearOffset: 0
    }
    // June
    , {
      displaySemesterIndex: 1
      , yearOffset: 0
    }
    // July
    , {
      displaySemesterIndex: 1
      , yearOffset: 0
    }
    // August
    , {
      displaySemesterIndex: 2
      , yearOffset: 0
    }
    // September
    , {
      displaySemesterIndex: 2
      , yearOffset: 0
    }
    // October
    , {
      displaySemesterIndex: 2
      , yearOffset: 0
    }
    // November
    , {
      displaySemesterIndex: 2
      , yearOffset: 0
    }
    // December
    , {
      displaySemesterIndex: 0
      , yearOffset: 1
    }
  ]

  today = new Date();

  displayYear = this.today.getFullYear() + this.yearSemesterLookupByMonthData[this.today.getMonth()].yearOffset;
  displaySemesterIndex = this.yearSemesterLookupByMonthData[this.today.getMonth()].displaySemesterIndex;

  loadedSemesters = new Map<string, any[]>();
  currentSemesterByClass: DisplayByClassData[] = [];
  currentSemesterByFaculty: DisplayByFacultyData[] = [];

  previousSemester() {
      // First check semester to see if we have to switch the year.
      if (this.displaySemester == 'Spring') {
        this.displaySemesterIndex = 2;
        this.displayYear--;
      } 
      else {
        this.displaySemesterIndex--
      }

      this.loadAndInitializeTab();
  }

  private async loadAndInitializeTab() {
    // Make sure after the async call, that we set the proper data...
    // Without these constants, a user could press the buttons many times and 
    // get data updated for the currently displayed semester, but that was
    // not the semester that had been fetched ! ! !
    const fetchingDataForSemester = this.displaySemester;
    const fetchingDataForYear = this.displayYear;

    // Once we have the proper semester and year setup, load the data if needed.
    try {

      if (!this.loadedSemesters.has(`${fetchingDataForSemester} ${fetchingDataForYear}`)) {

        const loadedSemester = await this.coursesSvc.loadCourses(`${fetchingDataForSemester} ${fetchingDataForYear}`);
        this.loadedSemesters.set(`${fetchingDataForSemester} ${fetchingDataForYear}`, loadedSemester);
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
      this.loadAndInitializeTab();
  }

  initTabs() {


    // Data is essentially in 'by class' shape, so no reduce, just unique and sort...
    this.currentSemesterByClass = this.loadedSemesters.get(`${this.displaySemester} ${this.displayYear}`)
    // map() it to an object...
    .map(x => ({
      class: x.class
      , faculty: [
        // Don't duplicate faculty, rather append number of sections if more than one...
        ...new Set([...x.faculty].sort().map((y, i, arr) => `${y} ${arr.filter(z => z === y).length > 1 ? '(' + arr.filter(z => z === y).length + ' sections)' : ''}`))
      ]
      // Then map it all to another object to add the checked property...
      .map(y => ({
        faculty: y
        // Checked lookup Logic here is i-o-g for sure : - )
        , checked: this.classesForUser.some(z => 
          z.semester === `${this.displaySemester} ${this.displayYear}`
          && z.classes.some(a => a.class === x.class)
          && z.classes.some(a => y.startsWith(a.faculty))
        )
      }))
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

    //console.log([...groupedByFaculty]);

    this.currentSemesterByFaculty = [...groupedByFaculty]
      .map(x => ({
        faculty: x[0]
        , classes: [
          ...x[1]
        ]
        .map(y => ({ 
          class: y[0]
          , numberOfSections: y[1]
          , checked: this.classesForUser.some(z => 
            z.semester === `${this.displaySemester} ${this.displayYear}`
            && z.classes.some(a => a.faculty === x[0])
            && z.classes.some(a => a.class === y[0])
          )
        }))
        .sort((a, b) => a.class == b.class ? 0 : a.class < b.class ? -1 : 1)
      }))
      .sort((a, b) => a.faculty == b.faculty ? 0 : a.faculty < b.faculty ? -1 : 1)
    ;

    //console.log(this.currentSemesterByFaculty);
  }

  toggleCheck(c, facultyCheckedOrUnchecked) {
    
    console.log(c);
    console.log(facultyCheckedOrUnchecked);

    if (facultyCheckedOrUnchecked.checked) {
      // Remove this item from this user's classes.

    }

    else {
      // Add a new item to this user's classes.
      const semester = this.classesForUser.find(x => x.semester === `${this.displaySemester} ${this.displayYear}`);
      console.log(semester);
      semester.classes = [
        ...semester.classes
        , {
          faculty: facultyCheckedOrUnchecked.faculty
          , class: c
        }
      ];
      console.log(semester.classes);
    }

    // Update the tabs.

    // Save the data back to the cloud.

  }
}
