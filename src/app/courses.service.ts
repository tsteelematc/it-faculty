import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpSvc: HttpClient ) { }

  testCallApiGateway() {
    this.httpSvc
      .get('https://bjs0nlo9wb.execute-api.us-east-2.amazonaws.com/dev/semester/semester:Summer%202020')
      //.get('https://bjs0nlo9wb.execute-api.us-east-2.amazonaws.com/dev/semester/Foo')
      .subscribe(
        data => {
          console.log(data);
          console.log(typeof(data[0].classes));
        }
        , err => console.error(err)
      )
    ;
  }

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
                      class: "Exploration of Information Technology"
                      , faculty: [
                          "Staff"
                          , "Staff"
                          , "Staff"
                          , "Staff"
                          , "Kim Bethea"
                          , "Kim Bethea"
                          , "Kim Bethea"
                          , "Kim Bethea"
                          , "Paul Thomas"
                          , "Paul Thomas"
                          , "Victor Johnson"
                      ]
                  }
                  , { 
                      class: "Preparation for an IT Career"
                      , faculty: [
                          "Angela Snelling"
                          , "Kim Bethea"
                          , "Kim Bethea"
                          , "Kim Bethea"
                          , "Kim Bethea"
                          , "Jeffrey Close"
                      ]
                  }
                  , { 
                      class: "Introduction to Cloud Computing"
                      , faculty: [
                          "Cathie Malin"
                          , "Curtis Chambers"
                          , "Curtis Chambers"
                          , "Cathie Malin"
                      ]
                  }
                  , { 
                      class: "VMware Certified Professional (VCP)"
                      , faculty: [
                          "Aaron Gallus"
                          , "Aaron Gallus"
                      ]
                  }
                  , { 
                      class: "AWS Administration"
                      , faculty: [
                          "Curtis Chambers"
                  ]}
                  , { 
                      class: "Introduction to Databases"
                      , faculty: [
                          "Caeli Rice"
                          , "Caeli Rice"
                          , "Temple Sutfin"
                          , "Matthew Weishan"
                          , "Temple Sutfin"
                          , "Caeli Rice"
                      ]
                  }
                  , { 
                      class: "SQL Database Programming"
                      , faculty: [
                          "Thomas Steele"
                          , "Cary Walker"
                      ]
                    }
                  , { 
                      class: "Intro to Cisco Networking"
                      , faculty: [
                          "Roger Montgomery Jr"
                          , "Roger Montgomery Jr"
                          , "Damian Roth"
                          , "Christopher Lewis"
                          , "Craig Newman"
                          , "Damian Roth"
                          , "Roger Montgomery Jr"
                          , "Brent Sieling"
                          , "Roger Montgomery Jr"
                      ]
                  }
                  , { 
                      class: "Cisco Networking 2"
                      , faculty: [
                          "Brent Sieling"
                  ]}
                  , { 
                      class: "Cisco Networking 3"
                      , faculty: [
                          "Denny Wright"
                          , "Denny Wright"
                      ]
                  }
                  , { 
                      class: "VoIP Convergence Fundamentals"
                      , faculty: [
                          "Brent Sieling"
                          , "Brent Sieling"
                      ]
                  }
                  , { 
                      class: "Advanced Networking Topics"
                      , faculty: [
                          "Brent Sieling"
                  ]}
                  , { 
                      class: "Wireless Topics"
                      , faculty: [
                          "Damian Roth"
                          , "Damian Roth"
                      ]
                  }
                  , { 
                      class: "Firewall/VPN Technologies"
                      , faculty: [
                          "Denny Wright"
                          , "Denny Wright"
                      ]
                  }
                  , { 
                      class: "Networking Internship"
                      , faculty: [
                          "Nina Milbauer"
                  ]}
                  , { 
                      class: "C# Web Development Using ASP.NET"
                      , faculty: [
                          "Caeli Rice"
                  ]}
                  , { 
                      class: "Advanced Cloud for Developers"
                      , faculty: [
                          "Thomas Steele"
                  ]}
                  , { 
                      class: "Python Programming"
                      , faculty: [
                          "Staff"
                          , "Staff"
                          , "Michael Masino"
                      ]
                  }
                  , { 
                      class: "Cloud for Developers"
                      , faculty: [
                          "Bryan Witkowski"
                  ]}
                  , { 
                      class: "Java Programming"
                      , faculty: [
                          "Paula Waite"
                          , "Cary Walker"
                      ]
                  }
                  , { 
                      class: "Advanced Java Programming"
                      , faculty: [
                          "Paula Waite"
                          , "Randall Bielby"
                          , "Paula Waite"
                      ]
                  }
                  , { 
                      class: "Enterprise Java Programming"
                      , faculty: [
                          "Paula Waite"
                  ]}
                  , { 
                      class: "Introduction to Programming with JavaScript"
                      , faculty: [
                          "Randall Bielby"
                          , "Staff"
                          , "Kenneth Marks"
                          , "William Schallert"
                          , "Randall Bielby"
                          , "Randall Bielby"
                      ]
                  }
                  , { 
                      class: "Website Development"
                      , faculty: [
                          "Lori Rodas"
                          , "Kari Daggs"
                          , "Temple Sutfin"
                          , "Kari Daggs"
                          , "Staff"
                          , "Bryan Witkowski"
                          , "Temple Sutfin"
                      ]
                  }
                  , { 
                      class: "Advanced CSS"
                      , faculty: [
                          "Lori Rodas"
                          , "Lori Rodas"
                      ]
                  }
                  , { 
                      class: "UI/UX for Developers"
                      , faculty: [
                          "Kari Daggs"
                          , "Kari Daggs"
                          , "Kari Daggs"
                      ]
                  }
                  , { 
                      class: "Agile Practices"
                      , faculty: [
                          "Richard Giese"
                          , "Thomas Steele"
                          , "Temple Sutfin"
                          , "Thomas Steele"
                      ]
                  }
                  , { 
                      class: "Web Software Developer Internship"
                      , faculty: [
                          "Kenneth McCullough"
                  ]}
                  , { 
                      class: "JS Frameworks"
                      , faculty: [
                          "Thomas Steele"
                  ]}
                  , { 
                      class: "PHP Web Development with MySQL"
                      , faculty: [
                          "Kenneth Marks"
                          , "Kenneth Marks"
                      ]
                  }
                  , { 
                      class: "Advanced PHP and MySQL Web Development"
                      , faculty: [
                          "Kenneth Marks"
                  ]}
                  , { 
                      class: "Advanced Javascript"
                      , faculty: [
                          "Bryan Witkowski"
                          , "Bryan Witkowski"
                      ]
                  }
                  , { 
                      class: "Android Applications Development with Kotlin"
                      , faculty: [
                          "Lori Rodas"
                  ]}
                  , { 
                      class: "IT Security Awareness"
                      , faculty: [
                          "Staff"
                          , "Staff"
                          , "Staff"
                          , "Jeffrey Pergal"
                          , "Staff"
                          , "Jeffrey Pergal"
                          , "Jeffrey Pergal"
                          , "Jeffrey Pergal"
                          , "Staff"
                          , "Staff"
                          , "Victor Johnson"
                      ]
                  }
                  , { 
                      class: "Linux Server 2 (Security)"
                      , faculty: [
                          "Michael Belton"
                  ]}
                  , { 
                      class: "Intrusion Detection"
                      , faculty: [
                          "Michael Masino"
                          , "Michael Masino"
                      ]
                  }
                  , { 
                      class: "Web Application Security"
                      , faculty: [
                          "Michael Belton"
                          , "Michael Belton"
                      ]
                  }
                  , { 
                      class: "Security Design"
                      , faculty: [
                          "Michael Masino"
                          , "Jon Forde"
                      ]
                  }
                  , { 
                      class: "A+ Hardware Essentials"
                      , faculty: [
                          "Lana Larsen McCarthy"
                  ]}
                  , { 
                      class: "Infrastructure Automation"
                      , faculty: [
                          "Angela Snelling"
                          , "Cathie Malin"
                      ]
                  }
                  , { 
                      class: "IT Service Concepts"
                      , faculty: [
                          "Aaron Gallus"
                  ]}
                  , { 
                      class: "IT Project Management"
                      , faculty: [
                          "Neal Andrews"
                  ]}
                  , { 
                      class: "Supporting Emerging Technologies"
                      , faculty: [
                          "Dale Jaedike"
                          , "Dale Jaedike"
                      ]
                  }
                  , { 
                      class: "Windows Server 1"
                      , faculty: [
                          "Dale Jaedike"
                          , "Staff"
                          , "Aaron Gallus"
                      ]
                  }
                  , { 
                      class: "Windows Server 2"
                      , faculty: [
                          "Orinda Conway"
                          , "Orinda Conway"
                      ]
                  }
                  , { 
                      class: "Enterprise Client"
                      , faculty: [
                          "Angela Snelling"
                          , "Lana Larsen McCarthy"
                          , "Lana Larsen McCarthy"
                          , "Cathie Malin"
                          , "Staff"
                          , "Dale Jaedike"
                          , "Lana Larsen McCarthy"
                          , "Curtis Chambers"
                      ]
                  }
                  , { 
                      class: "Linux Server 1"
                      , faculty: [
                          "Orinda Conway"
                          , "Michael Belton"
                          , "Angela Snelling"
                          , "Staff"
                          , "Angela Snelling"
                          , "Orinda Conway"
                      ]
                  }
                  , { 
                      class: "Systems Administration Internship"
                      , faculty: [
                          "Nina Milbauer"
                      ]
                  }
              ]
              : semester == 'Summer 2020'
                ? []
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
