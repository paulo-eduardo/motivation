import HttpException from "./HttpException";

class StudentNotFoundException extends HttpException {
  constructor(id: string) {
    super(404, `Student with id ${id} not found`);
  }
}

export default StudentNotFoundException;
