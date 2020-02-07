import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentsDetailComponent } from './departments-detail/departments-detail.component';


const routes: Routes = [
  {path : "" , redirectTo : '/department', pathMatch :'full' },
  {path : "department" , component : DepartmentComponent},
  {path : "departments/:id" , component : DepartmentsDetailComponent},
  {path : "employee" , component : EmployeeComponent},
  {path : "**" , component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export  const commonComponents = [DepartmentComponent,EmployeeComponent,PageNotFoundComponent,DepartmentsDetailComponent];
