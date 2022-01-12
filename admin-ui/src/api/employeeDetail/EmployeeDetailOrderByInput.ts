import { SortOrder } from "../../util/SortOrder";

export type EmployeeDetailOrderByInput = {
  createdAt?: SortOrder;
  empName?: SortOrder;
  empSalary?: SortOrder;
  id?: SortOrder;
  projectManagersId?: SortOrder;
  updatedAt?: SortOrder;
};
