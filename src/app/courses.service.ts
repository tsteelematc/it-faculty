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
              : semester == 'Summer 2020'
                ? [
                  { 
                      class: 'Exploration of Info Technology'
                      , faculty: 'Milbauer, Nina M'
                  }
                  , { 
                      class: 'Preparation for an IT Career'
                      , faculty: 'Bethea, Kim M' 
                  }
                  , { 
                      class: 'Preparation for an IT Career'
                      , faculty: 'Close, Jeffrey R'
                  }
                  , { 
                      class: 'Firewall/VPN Technologies'
                      , faculty: 'Roth, Damian'
                  }
                  , { 
                      class: 'IT Security Awareness'
                      , faculty: 'Milbauer, Nina M'
                  }
                  , { 
                      class: 'IT Security Awareness'
                      , faculty: 'Gallus, Aaron T'
                  }
                  , { 
                      class: 'Linux Server 2 (Security)'
                      , faculty: 'Masino,Michael'
                  }
                  , { 
                      class: 'Python Programming'
                      , faculty: 'Johnson, Victor'
                  }
                  , { 
                      class: 'Java Programming'
                      , faculty: 'Waite, Paula'
                  }
                  , { 
                      class: 'Intro Prog with JavaScript'
                      , faculty: 'Rodas,Lori'
                  }
                  , { 
                      class: 'Website Development-HTML5'
                      , faculty: 'Sutfin, Temple'
                  }
                  , { 
                      class: 'Advanced CSS'
                      , faculty: 'Rodas,Lori'
                  }
                  , { 
                      class: 'Advanced Javascript'
                      , faculty: 'Witkowski, Bryan'
                  }
                  , { 
                      class: 'Windows Server 1'
                      , faculty: 'Jaedike, Dale'
                  }
                  , { 
                      class: 'Enterprise Client'
                      , faculty: 'Larsen McCarthy, Lana'
                  }
                  , { 
                      class: 'Linux Server 1'
                      , faculty: 'Snelling, Angela'
                  }
                  , { 
                      class: 'Introduction to Databases'
                      , faculty: 'Weishan, Matthew'
                  }
                  , { 
                      class: 'Introduction to Databases'
                      , faculty: 'McCullough, Kenneth'
                  }
                  , { 
                      class: 'SQL Database Programming'
                      , faculty: 'Steele, Thomas'
                  }
                  , { 
                      class: 'Intro to Cloud Computing'
                      , faculty: 'Chambers, Curtis'
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
