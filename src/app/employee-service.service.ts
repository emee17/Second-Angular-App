import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iemployee } from './Iemployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private _url : string ="/assets/data/employee.json";
  
  //empp :Iemployee;
  emp : Observable<Iemployee[]> ;

  constructor(private http : HttpClient) { }

  getEmployee() : Observable<Iemployee[]>
  {
    this.emp = this.http.get<Iemployee[]>(this._url);
    return this.emp;
  }
}
