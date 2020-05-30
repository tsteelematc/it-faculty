import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  loadCourses() {
    return new Promise<number>(
      (resolve, reject) => {
        this.loading = true;
        setTimeout(
          () => {
            this.loading = false;
            resolve(42)
          }
          , 1500
        )
      }
    );
  }

  loading = false;
}
