import * as mongoose from "mongoose";
import Student from "../interfaces/student";

const studentSchema = new mongoose.Schema({
  name: String,
  age: String,
  course: String
});

const studentModel = mongoose.model<Student & mongoose.Document>(
  "Student",
  studentSchema
);

export default studentModel;
