import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styles: [],
  providers : [EmployeeService]
})
export class EmployeesComponent implements OnInit {

  constructor( private employeeService : EmployeeService ) { }

  ngOnInit() {
  }

}
