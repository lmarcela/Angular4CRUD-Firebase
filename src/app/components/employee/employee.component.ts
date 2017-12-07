import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { EmployeeService } from '../../services/employee.service'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styles: []
})
export class EmployeeComponent implements OnInit {
  constructor(public employeeService: EmployeeService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form: NgForm) {
    if (form.value.salary > 0) {
      if (form.value.$key == null) {
        this.employeeService.insertEmployee(this.employeeService.selectedEmployee);
      }
      else {
        this.employeeService.updateEmployee(this.employeeService.selectedEmployee);
      }
      this.resetForm(form);
    }
    else {
      alert("El salario debe ser mayor a 0");
    }
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this.employeeService.selectedEmployee = {
      $key: null,
      name: '',
      position: '',
      office: '',
      salary: 0,
    }
  }

  onDelete(form: NgForm) {
    if (confirm("Are you sure to delete this record ?") == true) {
      this.employeeService.deleteEmployee(form.value.$key);
      this.resetForm(form);
    }
  }

}
