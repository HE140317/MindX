import Student from "./student.js";


export default class Subject {
    ClassID;
    SubjectName;
    Teacher;
    StudentList;
    constructor(SubjectName, Teacher) {
        this.ClassID = uuid.v4();
        this.SubjectName = SubjectName;
        this.Teacher = Teacher;
        this.StudentList = [];
    }

    addStudent(student) {
        if (student instanceof Student) {
            this.StudentList.push(student);
        }
    }

    removeStudent(student) {
        if (student instanceof Student) {
            for (let i = 0; i < this.StudentList.length; i++) {
                if (student.id == this.StudentList[i].id) {
                    this.StudentList.splice(i, 1);
                }
            }
        }
    }

    editStudent(student) {
        if (student instanceof Student) {

        }
    }

    studentsInfo() {
        return this.StudentList;
    }

    teacherInfo() {
        return this.Teacher;
    }

    searchById(id) {
        for (const st of this.StudentList) {
            if (st.id === id) {
                return st;
            }
        }
    }

    searchByName(name) {
        const list = [];
        for (let i = 0; i < this.StudentList.length; i++) {
            if (this.StudentList[i].name === name) {
                list.push(this.StudentList[i]);
            }
        }
        return list;
    }

}