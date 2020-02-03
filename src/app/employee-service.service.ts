import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iemployee } from './Iemployee';
import { catchError } from 'rxjs/operators';
//import 'rxjs/add/observable/throw';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private _url : string = "https://jsonplaceholder.typicode.com/todos" //string ="/assets/data/employee.json";
  
  //empp :Iemployee;
  emp : Observable<Iemployee[]> ;

  constructor(private http : HttpClient) { }

  getEmployee() : Observable<Iemployee[]>
  {
    //this.emp = this.http.get<Iemployee[]>(this._url);
    
    return  this.http.get<Iemployee[]>(this._url).pipe(catchError(this.errorHandler));
  }
  errorHandler(error : HttpErrorResponse)
  {
    return throwError(error.message || "Server Response");
  }
}
