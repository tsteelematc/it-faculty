// This one is key/data from DynamoDB query result...
type SemesterDataFromCloud = any[];

// Each class in the array from DynamoDB results is one of these...
type SemesterClassFromCloud = {
    class: string
    , faculty: string[];
};

// Data is 'cached' locally in a Map so as not to keep querying DynamoDB needlessly...
type CachedSemesterData = Map<
    string
    , SemesterClassFromCloud[]
>;

type DisplayByClassData = {
    class: string
    , faculty: {
      facultyWithSessionCountIfNecessary: string   // Hacked to show multiple sessions, for now ! ! !
      , checked: boolean
    }[]
};
  
type DisplayByFacultyData = {
    faculty: string
    , classes: {
        class: string
        , numberOfSections: number
        , checked: boolean
    }[]
};
