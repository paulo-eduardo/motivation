import StudentService from "../student.service";
import mockingoose from "mockingoose";
import studentModel from "../student.model";

describe("student service", () => {
  let service: StudentService;

  beforeAll(async () => {
    service = new StudentService();
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should create new user", async () => {
    const mockUser = {
      _id: "507f191e810c19729de860ea",
      name: "Nayara",
      age: "21",
      course: "makeup"
    };

    mockingoose(studentModel).toReturn(mockUser, "save");

    const student = await service.create({
      name: "Nayara",
      age: "21",
      course: "makeup"
    });

    expect(student.id).toBe("507f191e810c19729de860ea");
    expect(student.name).toBe("Nayara");
    expect(student.age).toBe("21");
    expect(student.course).toBe("makeup");
  });

  it("should return list user", async () => {
    const mockUsers = [
      {
        _id: "507f191e810c19729de860ea",
        name: "Nayara",
        age: "21",
        course: "makeup"
      },
      {
        _id: "507f191e810c19729de860eb",
        name: "Nayara Maggioni",
        age: "21",
        course: "makeup"
      }
    ];

    mockingoose(studentModel).toReturn(mockUsers, "find");

    const students = await service.getAll();

    expect(students.length).toBe(2);
  });

  it("should return user by id", async () => {
    const mockUsers = {
      _id: "507f191e810c19729de860ea",
      name: "Nayara",
      age: "21",
      course: "makeup"
    };

    mockingoose(studentModel).toReturn(mockUsers, "findOne");

    const student = await service.getById(mockUsers._id);

    expect(student).toBeDefined();
    expect(student?.id).toBe("507f191e810c19729de860ea");
  });

  it("should return user by name", async () => {
    const mockUsers = [
      {
        _id: "507f191e810c19729de860ea",
        name: "Nayara",
        age: "21",
        course: "makeup"
      }
    ];

    mockingoose(studentModel).toReturn(mockUsers, "find");

    const student = (await service.getByName(mockUsers[0].name))[0];

    expect(student).toBeDefined();
    expect(student?.name).toBe("Nayara");
  });

  it("should return user updated", async () => {
    const mockUsers = {
      _id: "507f191e810c19729de860ea",
      name: "Nayara",
      age: "21",
      course: "makeup"
    };

    mockingoose(studentModel).toReturn(mockUsers, "findOneAndUpdate");

    const student = await service.modify(mockUsers._id, mockUsers);

    expect(student).toBeDefined();
    expect(student?.id).toBe("507f191e810c19729de860ea");
  });

  it("should return user updated", async () => {
    const mockUsers = {
      _id: "507f191e810c19729de860ea",
      name: "Nayara",
      age: "21",
      course: "makeup"
    };

    mockingoose(studentModel).toReturn(mockUsers, "findOneAndDelete");

    const student = await service.delete(mockUsers._id);

    expect(student).toBeDefined();
    expect(student?.id).toBe("507f191e810c19729de860ea");
  });
});
