import React, { useState } from 'react';
import EmployeeForm from './forms/EmployeeForm';
import Employee from './partials/Employee';
import { useQuery } from '@apollo/client';
import { FIND_ALL_USERS } from '../utils/queries';
import { AiOutlinePlus } from 'react-icons/ai';
import Auth from '../utils/auth';
import EmptyUser from './partials/EmptyUser';
import RequestSignIn from './partials/RequestSignIn';



const EmployeeList = () => {
  const { loading, data, error } = useQuery(FIND_ALL_USERS);

  const employees = data?.users || [];

  if (loading) return "Loading...";
  if (error) return <pre>{`Error: ${error.message}`}</pre>

  return (
    <>
      {Auth.loggedIn() ? (
        <div className='container'>
          <div className="card">
            <div className='card-header mb-0'>
              <div className="row">
                <div className="col-6">
                  <h1>Employees</h1>
                </div>
                <div className="col-6 text-end">
                  <EmployeeForm u={EmptyUser} id='new' button={
                    <button type='button' className='btn btn-primary' data-bs-toggle='tooltip' data-bs-placement='left' title='Add an Employee'>
                      <span data-bs-toggle='modal' data-bs-target='#addEmployeeForm-new'>
                        <AiOutlinePlus/> Employee
                      </span>
                    </button>
                  }/>
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
      ) : (
        <RequestSignIn/>
      )}
    </>
  )
}

export default EmployeeList
