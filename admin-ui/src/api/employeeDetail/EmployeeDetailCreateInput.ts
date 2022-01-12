import { ProjectManagerWhereUniqueInput } from "../projectManager/ProjectManagerWhereUniqueInput";

export type EmployeeDetailCreateInput = {
  empName: string;
  empSalary: number;
  projectManagers: ProjectManagerWhereUniqueInput;
};
