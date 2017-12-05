import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { EmployeeService } from '../../services/employee.service'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styles: []
})
export class EmployeeComponent implements OnInit {

  constructor( private employeeService : EmployeeService ) { }

  ngOnInit() {
  }

}
