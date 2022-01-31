import {Component, OnInit} from '@angular/core';
import {EmployeesService} from "../../services/employees.service";
import {IEmployee} from "../../models/employee.model";
import {take} from "rxjs";
import {EmployeesDataSource} from "../../classes/employees-data-source";

@Component({
  selector: 'app-list-of-employees',
  templateUrl: './list-of-employees.component.html',
  styleUrls: ['./list-of-employees.component.scss']
})
export class ListOfEmployeesComponent implements OnInit {

  public dataSource = new EmployeesDataSource([]);
  public displayedColumns: string[] = ['number', 'avatar', 'firstName', 'lastName', 'age', 'aggregator', 'actions'];

  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.employeesService.getEmployeesJson().pipe(take(1)).subscribe((employees) => {
      window.db = employees;
      this.updateDataSource();
    });
  }

  public deleteEmployee(index: number): void {
    if (confirm('Do you want to delete an employee?')) {
      window.db.splice(index, 1);
      this.updateDataSource();
    }
  }

  public editEmployee(employee: IEmployee): void {
    this.employeesService.openEditEmployeeDialog(employee).subscribe((res) => {
      if (res) this.updateDataSource();
    })
  }

  private updateDataSource(): void {
    this.dataSource.data = window.db;
  }

  public createEmployee(): void {
    this.employeesService.openCreateEmployeeDialog().subscribe((res) => {
      if (res) this.updateDataSource();
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
