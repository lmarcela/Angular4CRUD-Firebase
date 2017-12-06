import { Component, OnInit } from '@angular/core';
/*import { AngularFireList } from 'angularfire2/database'*/
import { EmployeeService } from '../../services/employee.service'
import { Employee } from '../../models/employee'
import { element } from 'protractor';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styles: []
})
export class EmployeeListComponent implements OnInit {
  employeelist : Employee[];
  constructor( private employeeService : EmployeeService ) { }

  ngOnInit() {
    var x = this.employeeService.getData();
    x.snapshotChanges().subscribe(item =>{
      this.employeelist=[];
      item.forEach(element=>{
        var y=element.payload.toJSON();
        y["$key"]=element.key;
        this.employeelist.push(y as Employee);
      })
    })
  }

}
