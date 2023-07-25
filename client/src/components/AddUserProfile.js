import React, { useState } from 'react'

import EmployeeForm from "./forms/EmployeeForm";
import EmptyUser from "./partials/EmptyUser";

import { FaFileCirclePlus } from 'react-icons/fa6';
import Auth from '../utils/auth';
import RequestSignIn from './partials/RequestSignIn';
import { useMutation } from '@apollo/client';
import { LINK_USER_ACCOUNT } from '../utils/mutations';
import FormInput from './partials/FormInput';

const AddUserProfile = () => {
  const [userCode, setUserCode] = useState('');

  const [linkUser, {linkError}] = useMutation(LINK_USER_ACCOUNT);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setUserCode(value);
  };

  const handleFormSubmit = async () => {
    const { data, error } = await linkUser({
      variables: {
        id: userCode,
      }
    })
  }

  return (
    <>
      {Auth.loggedIn() ? (
        <div className="container">
          <h4>Already have a user profile?</h4>
          <form onSubmit={handleFormSubmit}>
            <FormInput 
              type="text"
              title="User ID"
              name="userCode"
              value={userCode}
              onChange={handleInputChange}
              numInRow={1}
            />
            <button type='submit' className='btn btn-primary'>Submit</button>
          </form>
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
      ) : (
        <RequestSignIn/>
      )}
    </>
    
  )
}

export default AddUserProfile
