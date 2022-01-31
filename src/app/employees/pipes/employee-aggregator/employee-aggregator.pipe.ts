import { Pipe, PipeTransform } from '@angular/core';
import {IEmployee} from "../../models/employee.model";
import {Name} from "../../../core/models/name.model";

@Pipe({
  name: 'employeeAggregator',
  pure: false,
})
export class EmployeeAggregatorPipe implements PipeTransform {

  public transform(value: IEmployee): string {
    if (!value?.name) return '';
    let result = this.generateInitials(value.name);
    if (value.email) {
      result += ` - ${value.email}`;
    }
    return result;
  }

  private generateInitials(name: Name) {
    return `${name.first.charAt(0).toUpperCase()}.${name.last.charAt(0).toUpperCase()}.`;
  }
}
