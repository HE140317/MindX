export default class Teacher {
    TeacherID;
    Name;
    Age;
    Degree;
    constructor(Name, Age, Degree) {
        this.TeacherID = uuid.v4();
        this.Name = Name;
        this.Age = Age;
        this.Degree = Degree;
    }
}