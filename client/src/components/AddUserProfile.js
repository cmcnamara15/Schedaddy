import React from 'react'

import EmployeeForm from "./forms/EmployeeForm";
import EmptyUser from "./partials/EmptyUser";

import { FaFileCirclePlus } from 'react-icons/fa6';

const AddUserProfile = () => {
  return (
    <div className="container">
      <h4>Already have a user profile?</h4>
      <label >User ID:</label>
      <input type="text" />
      <button className='btn btn-primary'>Submit</button>
      <br/>
      <br/>
      <EmployeeForm u={EmptyUser} id='new' button={
        <button type='button' className='btn btn-secondary' data-bs-toggle='tooltip' data-bs-placement='left' title='Add an Employee'>
          <span data-bs-toggle='modal' data-bs-target='#addEmployeeForm-new'>
            Create New User Profile
          </span>
        </button>
      }/>
    </div>
  )
}

export default AddUserProfile
