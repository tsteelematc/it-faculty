import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpSvc: HttpClient ) { }

//   writeItem(item) {
//     this.httpSvc.post('https://5qisjq3214.execute-api.us-east-2.amazonaws.com/dev/semester', item).subscribe(
//         data => console.log(data)
//         , err => console.error(err)
//     );
//   }

//
// Looked at this again, wow, not using aws-amplify, rather...
//
// Just using built in Angular HTTP service, i-o-g : - )
//
loadCourses(semester: string): Promise<any> {
    this.loading = true;

    return new Promise<any>(
        (resolve, reject) => {
            this.httpSvc
            .get(`https://5qisjq3214.execute-api.us-east-2.amazonaws.com/dev/semester/semester:${semester}`)
            .subscribe(
              data => {
                  this.loading = false;
                  console.log(data);
                  //console.log(typeof(data[0].classes));
                  //console.log(JSON.parse(data[0].classes));
                  //resolve([]);
                  resolve(data[0] ? [...data[0].data] : []);
              }
              , err => {
                  this.loading = false;
                  console.error(err)
                  resolve([]);
              }
            )
          ;
        }
    )
  }

  loadUserClassesMock(email: string): UserClass[] {

    return [
        {
            semester: "Spring 2021"
            , classes: [
                {
                    faculty: "Thomas Steele"
                    , class: "Advanced Front End Development"
                }
            ]
        }
        , {
          semester: "Fall 2020"
          , classes: [
              {
                  faculty: "Lori Rodas"
                  , class: "Advanced CSS"
              }
          ]
      }
    ];
  }

  loading = false;
}
