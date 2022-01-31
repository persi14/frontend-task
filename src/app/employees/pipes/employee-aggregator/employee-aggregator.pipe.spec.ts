import { EmployeeAggregatorPipe } from './employee-aggregator.pipe';
import {IEmployee} from "../../models/employee.model";


describe('EmployeeAggregatorPipe', () => {

  let pipe: EmployeeAggregatorPipe;

  beforeEach(() => {
    pipe = new EmployeeAggregatorPipe();
  });

  it('create an instance', () => {
    const pipe = new EmployeeAggregatorPipe();
    expect(pipe).toBeTruthy();
  });

  it('transforms kopylov andrey to "A.K. - kek@us.ru"', () => {
    const testEmployee: IEmployee = {
      guid: '',
      name: {
        first: 'Andrey',
        last: 'kopylov',
      },
      age: 22,
      email: 'kek@us.ru',
    }
    expect(pipe.transform(testEmployee)).toBe('A.K. - kek@us.ru');
  });

  it('transforms sergey Len to "S.L. - len@mail.ru"', () => {
    const testEmployee: IEmployee = {
      guid: '',
      name: {
        first: 'Sergey',
        last: 'Len',
      },
      age: 22,
      email: '',
    }
    expect(pipe.transform(testEmployee)).toBe('S.L.');
  });
});
