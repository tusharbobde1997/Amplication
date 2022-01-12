import { EmployeeDetail } from "../employeeDetail/EmployeeDetail";

export type ProjectManager = {
  createdAt: Date;
  id: string;
  pmEmployees?: Array<EmployeeDetail>;
  pmName: string;
  pmSalary: string | null;
  updatedAt: Date;
};
