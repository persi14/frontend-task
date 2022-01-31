import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfEmployeesComponent } from './components/list-of-employees/list-of-employees.component';
import {MatTableModule} from "@angular/material/table";
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import { DialogEmployeeSettingsComponent } from './components/dialog-employee-settings/dialog-employee-settings.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import { EmployeeAggregatorPipe } from './pipes/employee-aggregator/employee-aggregator.pipe';

@NgModule({
  declarations: [
    ListOfEmployeesComponent,
    DialogEmployeeSettingsComponent,
    EmployeeAggregatorPipe
  ],
  exports: [
    ListOfEmployeesComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
  ]
})
export class EmployeesModule { }
