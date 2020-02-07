import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department',
  template: `
  
  <h2>Department</h2>
  <ul class="items">
    <li (click)="onSelect(department)" *ngFor="let department of departments" >
      <span class="badge">{{department.id}}</span><span>{{department.name}}</span>
    </li>
  </ul>
  `,
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(private router:Router) { }

  public departments = [{"id":1,"name":"Urdu"},
                        {"id":2,"name":"English"},
                        {"id":3,"name":"Science"},
                        {"id":4,"name":"Geography"}];

  ngOnInit() {
  }

  onSelect(department)
  {
    this.router.navigate(["/departments",department.id]);
  }
}
