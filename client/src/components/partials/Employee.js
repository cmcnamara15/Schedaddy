import React from 'react'
import DummyUser from './DummyUser'
import { FaAddressCard, FaRegAddressCard, FaX } from "react-icons/fa6";
import EmployeeForm from '../forms/EmployeeForm';

const Employee = ({ u, handleDetails, handleRemove }) => {
  console.log(u);

  return (
    <li className="list-group-item row d-flex">
      <div className="col-8">
        {u.firstName} {u.lastName}
      </div>
      <div className="col-4 text-end">
        <EmployeeForm u={u} id={u._id} button={
          <button type='button' className='btn btn-secondary' data-bs-toggle='tooltip' data-bs-placement='left' title='Add an Employee'>
            <span data-bs-toggle='modal' data-bs-target={`#addEmployeeForm-${u._id}`}>
              <FaAddressCard/>
            </span>
          </button>
        }/>
        <button className="btn btn-danger mx-1" data-bs-toggle='tooltip' data-bs-placement='left' title='Delete'><FaX/></button>
      </div>
    </li>
  )
}

export default Employee

Employee.defaultProps = {
  u: DummyUser
}

