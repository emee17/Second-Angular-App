import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor() { }

  getEmployee()
  {
    return [{"id":1,"name":"Tony","age":25},
            {"id":2,"name":"Bruce","age":27},
            {"id":3,"name":"Peter","age":20}];
  }
}
