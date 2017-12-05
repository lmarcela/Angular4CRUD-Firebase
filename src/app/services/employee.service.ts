import { Injectable } from '@angular/core';
import { Employee } from '../models/Employee'

@Injectable()
export class EmployeeService {
  selectedEmployee : Employee = new Employee();
  constructor() { }

}
