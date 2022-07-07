
export class Employee {
    id!: number;
    firstName!: string;
    lastName!: string;
    gender!: string;
    address!: string;
    phoneNumber!: string;
    mobileNumber!: string;
    deptID!: number;
    departmentName!: string;
    department!: Department;
  }

  export class Department{
    id!: number;
    departmentName!: string;
  }