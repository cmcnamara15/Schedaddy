import React, { useState } from 'react';
import EmployeeForm from './forms/EmployeeForm';
import Employee from './partials/Employee';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([
    {
      firstName: "Joe",
      lastName: "",
      address: {
        street1: "",
        street2: "",
        city: "",
        state: "",
        zip: "",
      },
      email: "",
      password: "",
      hireDate: "",
      terminationDate: "",
      payRate: "",
      fullTime: true,
      active: true,
      isAdmin: false
    }, {
      firstName: "",
      lastName: "",
      address: {
        street1: "",
        street2: "",
        city: "",
        state: "",
        zip: "",
      },
      email: "",
      password: "",
      hireDate: "",
      terminationDate: "",
      payRate: "",
      fullTime: true,
      active: true,
      isAdmin: false
    }, {
      firstName: "",
      lastName: "",
      address: {
        street1: "",
        street2: "",
        city: "",
        state: "",
        zip: "",
      },
      email: "",
      password: "",
      hireDate: "",
      terminationDate: "",
      payRate: "",
      fullTime: true,
      active: true,
      isAdmin: false
    }
  ]);

  return (
    <div>
      <h1>Employees</h1>
      <ul>
        {employees.map((em) => {
          <Employee
            
          />
        })}
      </ul>
      <EmployeeForm />
    </div>
  )
}

export default EmployeeList
