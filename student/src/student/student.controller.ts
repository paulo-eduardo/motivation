import * as express from "express";
import Controller from "../interfaces/controller";
import StudentService from "./student.service";
import Student from "../interfaces/student";
import validationMiddleware from "../middleware/validation.middleware";
import CreateStudentDto from "./student.dto";

import StudentNotFoundException from "../exceptions/StudentNotFoundException";

class PostsController implements Controller {
  public path = "/student";
  public router = express.Router();
  public students = new StudentService();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.get);
    this.router.get(`${this.path}/:id`, this.getById);
    this.router.patch(
      `${this.path}/:id`,
      validationMiddleware(CreateStudentDto, true),
      this.modify
    );
    this.router.delete(`${this.path}/:id`, this.delete);
    this.router.post(
      this.path,
      validationMiddleware(CreateStudentDto),
      this.create
    );
  }

  private get = async (req: express.Request, res: express.Response) => {
    const { name } = req.query;
    let students;
    if (name) students = await this.students.getByName(name);
    else students = await this.students.getAll();
    res.status(200).send(students);
  };

  private getById = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const { id } = req.params;
    const student = await this.students.getById(id);
    if (!student) next(new StudentNotFoundException(id));
    else res.status(200).send(student);
  };

  private modify = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const id = req.params.id;
    const studentData: Student = req.body;
    const student = await this.students.modify(id, studentData);
    if (student) res.status(200).send(student);
    else next(new StudentNotFoundException(id));
  };

  private create = async (req: express.Request, res: express.Response) => {
    const studentData: Student = req.body;
    const createdStudent = await this.students.create(studentData);
    res.status(201).send(createdStudent);
  };

  private delete = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const { id } = req.params;
    const result = await this.students.delete(id);
    if (result) res.status(200).send(result);
    else next(new StudentNotFoundException(id));
  };
}

export default PostsController;
