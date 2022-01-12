import { ProjectManager } from "../projectManager/ProjectManager";

export type EmployeeDetail = {
  createdAt: Date;
  empName: string;
  empSalary: number;
  id: string;
  projectManagers?: ProjectManager;
  updatedAt: Date;
};
