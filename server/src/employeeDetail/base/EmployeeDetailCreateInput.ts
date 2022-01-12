import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsInt, ValidateNested } from "class-validator";
import { ProjectManagerWhereUniqueInput } from "../../projectManager/base/ProjectManagerWhereUniqueInput";
import { Type } from "class-transformer";
@InputType()
class EmployeeDetailCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  empName!: string;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  empSalary!: number;

  @ApiProperty({
    required: true,
    type: () => ProjectManagerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProjectManagerWhereUniqueInput)
  @Field(() => ProjectManagerWhereUniqueInput)
  projectManagers!: ProjectManagerWhereUniqueInput;
}
export { EmployeeDetailCreateInput };
