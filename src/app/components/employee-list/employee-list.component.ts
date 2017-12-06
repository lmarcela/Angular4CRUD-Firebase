import { Component, OnInit } from '@angular/core';
import { AngularFireList } from 'angularfire2/database'
import { EmployeeService } from '../../services/employee.service'
import { Employee } from '../../models/employee'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styles: []
})
export class EmployeeListComponent implements OnInit {
  employeelist : AngularFireList<Employee>
  constructor( private employeeService : EmployeeService ) { }

  ngOnInit() {
    this.employeeService.getData();
  }

}
