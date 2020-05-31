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
                      class: 'Exploration of Info Technology (online)'
                      , faculty: 'Milbauer, Nina M'
                  }
                  , { 
                      class: 'Preparation for an IT Career (online)'
                      , faculty: 'Bethea, Kim M' 
                  }
                  , { 
                      class: 'Preparation for an IT Career (online)'
                      , faculty: 'Close, Jeffrey R'
                  }
                  , { 
                      class: 'Firewall/VPN Technologies (online)'
                      , faculty: 'Roth, Damian'
                  }
                  , { 
                      class: 'IT Security Awareness (online)'
                      , faculty: 'Milbauer, Nina M'
                  }
                  , { 
                      class: 'IT Security Awareness (online)'
                      , faculty: 'Gallus, Aaron T'
                  }
                  , { 
                      class: 'Linux Server 2 (Security) (online)'
                      , faculty: 'Masino,Michael'
                  }
                  , { 
                      class: 'Python Programming (online)'
                      , faculty: 'Johnson, Victor'
                  }
                  , { 
                      class: 'Java Programming (online)'
                      , faculty: 'Waite, Paula'
                  }
                  , { 
                      class: 'Intro Prog with JavaScript (online)'
                      , faculty: 'Rodas,Lori'
                  }
                  , { 
                      class: 'Website Development-HTML5 (online)'
                      , faculty: 'Sutfin, Temple'
                  }
                  , { 
                      class: 'Advanced CSS (online)'
                      , faculty: 'Rodas,Lori'
                  }
                  , { 
                      class: 'Advanced Javascript (online)'
                      , faculty: 'Witkowski, Bryan'
                  }
                  , { 
                      class: 'Windows Server 1 (online)'
                      , faculty: 'Jaedike, Dale'
                  }
                  , { 
                      class: 'Enterprise Client (online)'
                      , faculty: 'Larsen McCarthy, Lana'
                  }
                  , { 
                      class: 'Linux Server 1 (online)'
                      , faculty: 'Snelling, Angela'
                  }
                  , { 
                      class: 'Introduction to Databases (online)'
                      , faculty: 'Weishan, Matthew'
                  }
                  , { 
                      class: 'Introduction to Databases (online)'
                      , faculty: 'McCullough, Kenneth'
                  }
                  , { 
                      class: 'SQL Database Programming (online)'
                      , faculty: 'Steele, Thomas'
                  }
                  , { 
                      class: 'Intro to Cloud Computing (online)'
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
