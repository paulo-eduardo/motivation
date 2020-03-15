import * as request from "supertest";
import StudentController from "../student.controller";
import Student from "../../interfaces/student";
import App from "../../app";

describe("Studend", () => {
  let id: String;

  it("should create student", async () => {
    const studentController = new StudentController();
    const app = new App([studentController]);
    const result = await request(app.getServer())
      .post(`${studentController.path}/`)
      .send({ name: "Paulo Teste", age: "28", course: "TI" });

    id = result.body._id;
    expect(result.body).toBeDefined();
    expect((result.body as Student).name).toBe("Paulo Teste");
  });

  it("should return error", async () => {
    const studentController = new StudentController();
    const app = new App([studentController]);
    const result = await request(app.getServer())
      .post(`${studentController.path}/`)
      .send({ name: "Paulo Teste", age: "28" });

    expect(result.body).toBeDefined();
    expect(result.status).toBe(400);
  });

  it("should return students", async () => {
    const studentController = new StudentController();
    const app = new App([studentController]);
    const result = await request(app.getServer())
      .get(`${studentController.path}/`)
      .send();

    expect(result.body).toBeDefined();
    expect(result.status).toBe(200);
    expect((result.body as any[]).length).toBeGreaterThan(0);
    expect(
      (result.body as any[]).find(x => x.name === "Paulo Teste")
    ).toBeDefined();
  });

  it("should return student", async () => {
    const studentController = new StudentController();
    const app = new App([studentController]);
    const result = await request(app.getServer())
      .get(`${studentController.path}/${id}`)
      .send();

    expect(result.body).toBeDefined();
    expect(result.status).toBe(200);
    expect((result.body as Student).name).toBe("Paulo Teste");
  });

  it("should return error, user not found", async () => {
    const studentController = new StudentController();
    const app = new App([studentController]);
    const result = await request(app.getServer())
      .get(`${studentController.path}/5e6e6944740221005f5c8a45`)
      .send();

    expect(result.body).toBeDefined();
    expect(result.status).toBe(404);
  });

  it("should update students", async () => {
    const studentController = new StudentController();
    const app = new App([studentController]);
    const result = await request(app.getServer())
      .patch(`${studentController.path}/${id}`)
      .send({ name: "Paulo Teste Atualizado", age: "28", course: "TI" });

    expect(result.body).toBeDefined();
    expect(result.status).toBe(200);
    expect((result.body as Student).name).toBe("Paulo Teste Atualizado");
  });

  it("should delete students", async () => {
    const studentController = new StudentController();
    const app = new App([studentController]);
    const result = await request(app.getServer())
      .delete(`${studentController.path}/${id}`)
      .send();

    expect(result.body).toBeDefined();
    expect(result.status).toBe(200);
    expect((result.body as Student).name).toBe("Paulo Teste Atualizado");
  });
});
