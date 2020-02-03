import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { error } from 'util';

@Component({
  selector: 'app-employee',
  template: `

  <div>
    <h3>Employee Details</h3>
    <h3>{{errorMsg}}</h3>
    <ul *ngFor = "let employee of employees">
      <li>{{employee.id}} {{employee.userId}} {{employee.title}} {{employee.completed}} Change</li>
    </ul>

  </div>

  
  ` ,
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public employees = [];

  public errorMsg;

  constructor(private _employeeService :EmployeeServiceService) {}

  ngOnInit() {
    this._employeeService.getEmployee()
        .subscribe(data => this.employees = data, error => this.errorMsg = error); 
  }

}
