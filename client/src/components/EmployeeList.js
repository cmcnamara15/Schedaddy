import React, { useState } from 'react';
import EmployeeForm from './forms/EmployeeForm';
import Employee from './partials/Employee';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([
    {
      firstName: "Joe",
      lastName: "Cool",
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
      firstName: "John",
      lastName: "Doe",
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
      firstName: "Billy",
      lastName: "Bob",
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

  const handleDetails = (e) => {
    e.preventDefault();
  }

  const handleRemove = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <div className="card">
        <div className='card-header row'>
          <div className="col-6">
            <h1>Employees</h1>
          </div>
          <div className="col-6 text-end">
            <EmployeeForm />
          </div>
        </div>
        <ul className="list-group list-group-flush">
          {employees.map((emp) => <Employee u={emp}/>)}
          {employees.map((emp) => <Employee u={emp}/>)}
          {employees.map((emp) => <Employee u={emp}/>)}
          {employees.map((emp) => <Employee u={emp}/>)}
          {employees.map((emp) => <Employee u={emp}/>)}
          {employees.map((emp) => <Employee u={emp}/>)}
        </ul>
      </div>
      
    </div>
  )
}

export default EmployeeList
