import {Component, Inject, OnInit, Optional} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ISettingsEmployeeResult} from "../../models/settings-employee-result.model";
import {IEmployee} from "../../models/employee.model";

@Component({
  selector: 'app-dialog-employee-settings',
  templateUrl: './dialog-employee-settings.component.html',
  styleUrls: ['./dialog-employee-settings.component.scss']
})
export class DialogEmployeeSettingsComponent implements OnInit {

  form = new FormGroup({
    name: new FormGroup({
      first: new FormControl('', [Validators.required]),
      last: new FormControl('', [Validators.required])
    }),
    age: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
  });

  constructor(@Optional() @Inject(MAT_DIALOG_DATA) private employee: IEmployee,
              private dialogRef: MatDialogRef<DialogEmployeeSettingsComponent>) { }

  ngOnInit(): void {
    if (this.employee) {
      this.form.patchValue({
        name: this.employee.name,
        age: this.employee.age,
        email: this.employee.email,
      })
    }
  }

  submitForm() {
    console.log(this.form.value);
    this.dialogRef.close(this.form.value as ISettingsEmployeeResult)
  }
}
