import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-departments-detail',
  template: `
    <h2>
      departments-detail works!
      you have Selected department with id {{departmentId}}
    </h2>
  `,
  styles: []
})
export class DepartmentsDetailComponent implements OnInit {

  constructor(private activateRout : ActivatedRoute, private  route:Router) { }
  public departmentId ; 

  ngOnInit() {
    // let id = parseInt(this.activateRout.snapshot.paramMap.get("id"));
    // this.departmentId = id;

    this.route.paramMap.subscribe((param : ParamMap) =>{
      let id = parseInt(param.get('id'))
    });
  }

}
