import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';

import { Employee } from '../models/Employee';

@Injectable()
export class EmployeeService {
  employeeList : AngularFireList<any>;
  selectedEmployee : Employee = new Employee();
  constructor(private firebase : AngularFireDatabase) { }

  getData(){
    this.employeeList = this.firebase.list('employees');
    return this.employeeList;
  }
  insertEmployee(employee : Employee){
    this.employeeList.push({
      name : employee.name,
      position : employee.position,
      office : employee.office,
      salary : employee.salary
    });
  }
}
