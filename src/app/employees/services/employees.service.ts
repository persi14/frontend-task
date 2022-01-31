import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IEmployee} from "../models/employee.model";
import {map, Observable} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {
  DialogEmployeeSettingsComponent
} from "../components/dialog-employee-settings/dialog-employee-settings.component";
import {ISettingsEmployeeResult} from "../models/settings-employee-result.model";
import {Guid} from "guid-typescript";

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private httpClient: HttpClient,
              private matDialog: MatDialog) { }

  getEmployeesJson(): Observable<IEmployee[]> {
    return this.httpClient.get<IEmployee[]>("./assets/db/mates.json")
  }

  public openCreateEmployeeDialog(): Observable<boolean> {
    const dialog = this.matDialog.open<any, null, ISettingsEmployeeResult>
    (DialogEmployeeSettingsComponent, {panelClass: 'dialog-container'});
    return dialog.afterClosed().pipe(
      map((res) => this.createEmployee(res))
    )
  }

  public openEditEmployeeDialog(employee: IEmployee): Observable<boolean> {
    const dialog = this.matDialog.open<any, IEmployee, ISettingsEmployeeResult>
    (DialogEmployeeSettingsComponent, {data: employee, panelClass: 'dialog-container'});
    return dialog.afterClosed().pipe(
      map((res) => this.editEmployee(res, employee))
    )
  }

  private createEmployee(result: ISettingsEmployeeResult | undefined): boolean {
    if (result) {
      const employee: IEmployee = {guid: Guid.create().toString(), ...result};
      window.db = [...window.db, employee];
    }
    return !!result;
  }

  private editEmployee(result: ISettingsEmployeeResult | undefined, employee: IEmployee): boolean {
    const currentEmployee = window.db.find((e) => e.guid === employee.guid);
    if (result && currentEmployee !== undefined) {
      currentEmployee.age = result.age;
      currentEmployee.name = result.name;
      currentEmployee.email = result.email;
      window.db = [...window.db];
    }
    return !!(result && currentEmployee !== undefined);
  }

}
