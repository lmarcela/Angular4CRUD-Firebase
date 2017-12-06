import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { EmployeeService } from '../../services/employee.service'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styles: []
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form: NgForm) {
    if (form.value.$key == '') {
      this.employeeService.insertEmployee(form.value);
    }
    else {
      this.employeeService.updateEmployee(form.value);
    }
    this.resetForm(form);
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this.employeeService.selectedEmployee = {
      $key: '',
      name: '',
      position: '',
      office: '',
      salary: 0,
    }
  }

}
