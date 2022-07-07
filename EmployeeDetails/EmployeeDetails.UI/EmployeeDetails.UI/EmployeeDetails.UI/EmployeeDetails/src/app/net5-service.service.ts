import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './Employee';
import { Department } from './Department';



@Injectable({
  providedIn: 'root'
})
export class Net5ServiceService {

  url = 'https://localhost:44367/api/Employee/';
  constructor(private http: HttpClient) { }

GetAllEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url + 'GetAllEmployee');
}
postEmployeeData(employeeData: Employee): Observable<Employee> {
  const httpHeaders = { headers:new HttpHeaders({'Content-Type': 'application/json'}) };
  return this.http.post<Employee>(this.url + 'AddEmployees', employeeData, httpHeaders);
}
updateEmployee(employee: Employee): Observable<Employee> {
  const httpHeaders = { headers:new HttpHeaders({'Content-Type': 'application/json'}) };
  return this.http.post<Employee>(this.url + 'EditEmployees?id=' + employee.id, employee, httpHeaders);
}
deleteEmployeeById(id: number): Observable<number> {
  return this.http.post<number>(this.url + 'DeleteEmployeeDtls?id=' + id, null);    
}
getEmployeetDetailsById(id: number): Observable<Employee> {
  return this.http.get<Employee>(this.url + 'GetEmployeeDtlsByID?id=' + id);    
}
public GetAllDepartment = (): Observable<any> => {  
      //  return this.http.get<Department[]>(this.url).map((response: Response) => <any>response.json());  
        return this.http.get<Department[]>(this.url + 'GetDrpDwnList');
  } 
}
     