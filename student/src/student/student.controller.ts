import * as express from "express";
import Controller from "../interfaces/controller";
import StudentService from "./student.service";
import Student from "../interfaces/student";

class PostsController implements Controller {
  public path = "/student";
  public router = express.Router();
  public students = new StudentService();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.getAll);
    this.router.get(`${this.path}/:id`, this.getById);
    this.router.put(`${this.path}/:id`, this.modify);
    this.router.delete(`${this.path}/:id`, this.delete);
    this.router.post(this.path, this.create);
  }

  private getAll = async (_req: express.Request, res: express.Response) => {
    const students = await this.students.getAll();
    res.status(200).send(students);
  };

  private getById = async (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    const student = await this.students.getById(id);
    res.status(200).send(student);
  };

  private modify = (req: express.Request, res: express.Response) => {
    const id = req.params.id;
    const studentData: Student = req.body;
    const student = this.students.modify(id, studentData);
    res.status(201).send(student);
  };

  private create = async (req: express.Request, res: express.Response) => {
    const studentData: Student = req.body;
    const createdStudent = await this.students.create(studentData);
    res.status(201).send(createdStudent);
  };

  private delete = async (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    await this.students.delete(id);
    res.status(200);
  };
}

export default PostsController;
