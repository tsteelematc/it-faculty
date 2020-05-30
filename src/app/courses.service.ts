import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  loadCourses(semester: string) {
    return new Promise<any>(
      (resolve, reject) => {
        this.loading = true;
        setTimeout(
          () => {
            this.loading = false;
            resolve(semester == 'Fall 2020'
              ? [
                {
                  class: 'Agile (online)'
                  , faculty: 'Tom Steele'
                }
                , {
                  class: 'Agile (online live)'
                  , faculty: 'Tom Steele'
                }
                , {
                  class: 'Adv Cloud (online live)'
                  , faculty: 'Tom Steele'
                }
                , {
                  class: 'JS Frameworks (online)'
                  , faculty: 'Tom Steele'
                }
                , {
                  class: 'SQL (online)'
                  , faculty: 'Tom Steele'
                }
                , {
                  class: 'Agile (online live)'
                  , faculty: 'Rick Geise'
                }
                , {
                  class: 'Agile (online live)'
                  , faculty: 'Temple'
                }
              ]
              : []
            )
          }
          , 1500
        )
      }
    );
  }

  loading = false;
}
