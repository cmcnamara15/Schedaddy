import React, { useState } from 'react';
import EmployeeForm from './forms/EmployeeForm';
import Employee from './partials/Employee';
import { useQuery } from '@apollo/client';
import { FIND_ALL_USERS } from '../utils/queries';



const EmployeeList = () => {
  const { loading, data } = useQuery(FIND_ALL_USERS);
  console.log(data);

  const employees = data?.users || [];

  const handleDetails = (e) => {
    e.preventDefault();
  }

  const handleRemove = (e) => {
    e.preventDefault();
  }

  return (
    <div className='container'>
      <div className="card">
        <div className='card-header mb-0'>
          <div className="row">
            <div className="col-6">
              <h1>Employees</h1>
            </div>
            <div className="col-6 text-end">
              <EmployeeForm />
            </div>
          </div>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            {employees.map((emp) => <Employee u={emp}/>)}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default EmployeeList
