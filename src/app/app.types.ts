//
// This one is key/data from DynamoDB query result...
//
// Maybe strongly type it later ? ? ?
//
type SemesterDataFromCloud = any[];

//
// Each class in the array from the cloud (DynamoDB) results is one of these...
//
type SemesterClassFromCloud = {
    class: string;
    faculty: string[];
};

//
// Data is 'cached' locally in a Map so as not to keep querying the cloud (DynamoDB) needlessly...
//
type CachedSemesterData = Map<
    string
    , SemesterClassFromCloud[]
>;

//
// Data shape for the Classes tab...
//
// Not, this had the sections hacked into the display string. This was done
// differently for the Faculty tab...
//
type DisplayByClassData = {
    class: string;
    faculty: {
      facultyWithSessionCountIfNecessary: string
      , checked: boolean
    }[];
};
  
//
// Data shape for the Faculty tab...
//
type DisplayByFacultyData = {
    faculty: string;
    classes: {
        class: string;
        numberOfSections: number;
        checked: boolean;
    }[];
};

type UserClass = {
    semester: string;
    classes: {
      faculty: string;
      class: string;
    }[]
};
