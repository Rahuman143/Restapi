import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EmployeeModel } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-getpost';
  loginForm !: FormGroup;
  employeeModelObj: EmployeeModel = new EmployeeModel();
  employeeData !: any;
  api: any;
  constructor(private formbuilder: FormBuilder) { }
  onSubmit(): void {
    this.loginForm = this.formbuilder.group({
      userId: [''],
      id: [''],
      title: [''],
      description: ['']
    })
    this.getAllEmployee();
  }
  postEmployeeDetails() {
    this.employeeModelObj.userId = this.loginForm.value.userId;
    this.employeeModelObj.id = this.loginForm.value.id;
    this.employeeModelObj.title = this.loginForm.value.title;
    this.employeeModelObj.description = this.loginForm.value.description;

    this.api.postEmploye(this.employeeModelObj)
      .subscribe((res: any) => {
        console.log(res);
        alert("Employee added sucessfully")
        this.getAllEmployee();
      })
  }
  getAllEmployee() {
    this.api.getEmployee()
      .subscribe((res: any) => {
        this.employeeData = res;
      })
  }

  deleteEmployee(row: any) {
    this.api.deleteEmployee(row)
      .subscribe((res: any) => {
        alert("removed")
      })
  }

}


