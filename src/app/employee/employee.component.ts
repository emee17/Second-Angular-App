import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee',
  template: `

  <div>
    <h3>Employee Details</h3>
    <ul *ngFor = "let employee of employees">
      <li>{{employee.id}} {{employee.name}} {{employee.age}}</li>
    </ul>

  </div>

  
  ` ,
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public employees = [];

  constructor(private _employeeService :EmployeeServiceService) {}

  ngOnInit() {
    this.employees = this._employeeService.getEmployee(); 
  }

}
