export default class Student {
    StudentID;
    Name;
    Age;
    SchoolYear;
    constructor(Name, Age, SchoolYear) {
        this.StudentID = uuid.v4();
        this.Name = Name;
        this.Age = Age;
        this.SchoolYear = SchoolYear;
    }
}