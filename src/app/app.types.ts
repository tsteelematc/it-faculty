//
// This one is key/data from DynamoDB query result...
//
// Maybe strongly type it later ? ? ?
//
type SemesterDataFromCloud = any[];

//
// Semester related type playing...
//
// Looking for type safety and 'understanding' here, fools errand ? ? ?
//
type Semester = string;

export const Semesters = [
    'Spring'
    , 'Summer'
    , 'Fall'
];

type MakeSemesterFunc = (semester: string, year: number) => Semester;
export const MakeSemester: MakeSemesterFunc = (s, y) => `${s} ${y}`;

type NextSemesterFunc = (s: Semester) => Semester;
type PreviousSemesterFunc = (s: Semester) => Semester;

//
// Each class in the array from the cloud (DynamoDB) results is one of these...
//
type SemesterClassFromCloud = {
    class: Semester;
    faculty: string[];
};

//
// Data is 'cached' locally in a Map so as not to keep querying the cloud (DynamoDB) needlessly...
//
export type CachedSemesterData = Map<
    string
    , SemesterClassFromCloud[]
>;

//
// Data shape for the Classes tab...
//
// Not, this had the sections hacked into the display string. This was done
// differently for the Faculty tab...
//
export type DisplayByClassData = {
    class: string;
    faculty: {
      faculty: string
      , numberOfSections: number
      , checked: boolean
    }[];
};
  
//
// Data shape for the Faculty tab...
//
export type DisplayByFacultyData = {
    faculty: string;
    classes: {
        class: string;
        numberOfSections: number;
        checked: boolean;
    }[];
};

export type UserClass = {
    semester: Semester;
    class: string;
    faculty: string;
};
