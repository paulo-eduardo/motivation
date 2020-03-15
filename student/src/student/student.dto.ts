import { IsString } from "class-validator";

class CreateStudentDto {
  @IsString()
  public name!: string;

  @IsString()
  public age!: string;

  @IsString()
  public course!: string;
}

export default CreateStudentDto;
