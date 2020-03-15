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
    return await this.students.find({ name });
  };

  modify = async (id: string, student: Student) => {
    return await this.students.findByIdAndUpdate(id, student, { new: true });
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
