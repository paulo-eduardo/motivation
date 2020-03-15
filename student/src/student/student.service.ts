import studentModel from "./student.model";
import Student from "../interfaces/student";

class StudentService {
  private students = studentModel;

  getAll = async () => {
    return await this.students.find();
  };

  getById = async (id: string) => {
    return await this.students.findById(id);
  };

  getByName = async (name: string) => {
    return await this.students.find({
      name: {
        $regex: new RegExp(name, "ig")
      }
    });
  };

  modify = async (id: string, student: Student) => {
    const updatedStudent = await this.students.findByIdAndUpdate(id, student, {
      new: true
    });
    return updatedStudent;
  };

  create = async (student: Student) => {
    const createdStudent = new this.students(student);
    return await createdStudent.save();
  };

  delete = async (id: string) => {
    return await this.students.findByIdAndDelete(id);
  };
}

export default StudentService;
