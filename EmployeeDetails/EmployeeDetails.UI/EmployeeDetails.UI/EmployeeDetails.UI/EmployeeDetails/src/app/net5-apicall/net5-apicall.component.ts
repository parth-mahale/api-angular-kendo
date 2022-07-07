import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Employee';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Net5ServiceService } from '../net5-service.service';

import { HttpClient } from '@angular/common/http';
import { Department } from '../Department';
   

@Component({
  selector: 'app-net5-apicall',             
  templateUrl: './net5-apicall.component.html',                                           
  styleUrls: ['./net5-apicall.component.css']
})              
export class Net5ApicallComponent implements OnInit {

 public alert:boolean=false;
 public alertDel:boolean=false;
  EmployeeList: Employee[] = [];
  Department!: Department[];  
  SelectedDepartment: number | undefined;  
  
  public EmployeeForm!: FormGroup;

  UpdButtonVisible = false;
  PostButtonVisible = true;

  //EmployeeList!: Observable<Employee[]>;
  EmployeeList1!: Observable<Employee[]>;
  //EmployeeForm: any
  massage = "";
  EmployeeCategory = "";
  EmployeeId = 0;

  public data: any = {
    FirstName: "",
    LastName: "",
    Gender: "",
    Address: "",
    PhoneNumber: "",
    MobileNumber: "",
    DeptID: "",
  };
  constructor(private formbulider: FormBuilder, private httpClient: HttpClient, private EmployeeService: Net5ServiceService) 
  {
    this.EmployeeForm = new FormGroup({
      FirstName: new FormControl(this.data.FirstName, [Validators.required]),
      LastName: new FormControl(this.data.LastName, [
        Validators.required,
      ]),
      Gender: new FormControl(this.data.Gender, [
        Validators.required,
      ]),
      Address: new FormControl(this.data.Address, [
        Validators.required,
      ]),
      PhoneNumber: new FormControl(this.data.PhoneNumber, [
        Validators.required,
      ]),
      MobileNumber: new FormControl(this.data.MobileNumber, [
        Validators.required,
      ]),
      DeptID: new FormControl(this.data.DeptID, 
          [Validators.requiredTrue]),
    });
   }
 
  ngOnInit(){
    document.body.classList.add('bg-img');
    //this.EmployeeCategory = "0";
    // this.EmployeeForm = this.formbulider.group({
    //   FirstName: ['', [Validators.required]],
    //   LastName: ['', [Validators.required]],
    //   Gender: ['', [Validators.required]],
    //   Address: ['', [Validators.required]],
    //   PhoneNumber: ['', [Validators.required]],
    //   MobileNumber: ['', [Validators.required]],
    //   DeptID: ['', [Validators.required]]
    // });
    this.GetAllEmployee();
  }         
  GetAllEmployee() {
    this.EmployeeService.GetAllEmployee().subscribe(data => {
      this.EmployeeList = data;
    });
    // this.EmployeeList = this.EmployeeService.GetAllEmployee();
    // this.EmployeeList = this.EmployeeList1;

    this.EmployeeService.GetAllDepartment().subscribe(data => 
      this.Department = data,  
      error => console.log(error),  
      () => console.log('Get all complete'));  


}
public submitForm( EMP: Employee): void {
  try {
    this.EmployeeForm.markAllAsTouched();
  this.PostButtonVisible = true;
  const employee_Master = this.EmployeeForm.value;
  this.EmployeeService.postEmployeeData(employee_Master).subscribe(
    () => {
      this.massage = 'Data Saved Successfully';
      this.GetAllEmployee();
      this.alert = true;
      this.EmployeeForm.reset({});
      this.PostButtonVisible = true;
     
    }
  ); 
  } 
  catch (error) {
    this.PostButtonVisible = true;
  }
  
}
// PostEmployee(employee: Employee) 
// {
//   //debugger;
//   const employee_Master = this.EmployeeForm.value;
//   this.EmployeeService.postEmployeeData(employee_Master).subscribe(
//     () => {
//       this.massage = 'Data Saved Successfully';
//       this.GetAllEmployee();
//       this.alert = true;
//       this.EmployeeForm.reset({});
//       this.PostButtonVisible = true;
//       this.PostButtonVisible = true;
//     }
//   );                 
// }        
UpdateEmployee(employee: Employee) {
  //debugger;
  employee.id = this.EmployeeId;
  const employee_Master = this.EmployeeForm.value;
  this.EmployeeService.updateEmployee(employee_Master).subscribe(() => {
    this.massage = 'Record Updated Successfully';
    this.GetAllEmployee();
    this.alert = true;
    this.EmployeeForm.reset({});
    this.PostButtonVisible = true;
  });
}
DeleteEmployee(id: number) {
  if (confirm('Do you want to delete this record?')) {
    this.EmployeeService.deleteEmployeeById(id).subscribe(() => {
      this.GetAllEmployee();
      this.EmployeeForm.reset({});
      this.alertDel = true;
      this.PostButtonVisible = true;
    });
  }
}
EmployeeDetailsToEdit(id: number) {
                                                    
  this.UpdButtonVisible = true
  this.PostButtonVisible = false;
  //debugger;
  this.EmployeeService.getEmployeetDetailsById(id).subscribe(EmployeeResult => {
    this.EmployeeId = EmployeeResult.id;
    this.EmployeeForm.controls['FirstName'].setValue(EmployeeResult.firstName);
    this.EmployeeForm.controls['LastName'].setValue(EmployeeResult.lastName);
    this.EmployeeForm.controls['Gender'].setValue(EmployeeResult.gender);
    this.EmployeeForm.controls['Address'].setValue(EmployeeResult.address);
    this.EmployeeForm.controls['PhoneNumber'].setValue(EmployeeResult.phoneNumber);
    this.EmployeeForm.controls['MobileNumber'].setValue(EmployeeResult.mobileNumber);
    this.EmployeeForm.controls['DeptID'].setValue(EmployeeResult.deptID);

    
    // this.productForm.controls['product_category'].setValue(productResult.productCost);
  });
}
closeAlert()
{
  this.alert = false;
  this.alertDel = false;
}
}
