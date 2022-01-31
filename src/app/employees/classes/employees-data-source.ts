import {IEmployee} from "../models/employee.model";
import {MatTableDataSource} from "@angular/material/table";

export class EmployeesDataSource extends MatTableDataSource<IEmployee>{

  constructor(initialData: IEmployee[]) {
    super();
    this.data = initialData;
  }
}
