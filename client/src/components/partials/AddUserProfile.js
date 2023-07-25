import React, { useState } from 'react'

import EmployeeForm from "../forms/EmployeeForm";
import EmptyUser from "./EmptyUser";

import { FaFileCirclePlus } from 'react-icons/fa6';
import Auth from '../../utils/auth';
import RequestSignIn from './RequestSignIn';
import { useMutation } from '@apollo/client';
import { LINK_USER_ACCOUNT } from '../../utils/mutations';
import FormInput from './FormInput';

const AddUserProfile = () => {
  const [userCode, setUserCode] = useState('');

  const [linkUser, {linkError}] = useMutation(LINK_USER_ACCOUNT);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setUserCode(value);
  };

  const handleFormSubmit = async () => {
    const { data } = await linkUser({
      variables: {
        id: userCode,
      }
    })
    Auth.login(data.login.token);
    window.location.reload();
  }

  return (
    <div className="container my-5" style={{width: '70%'}}>
      <h3 className='text-center'>No user profile found!</h3>
      <br/>
      <h5>Already have a user profile?</h5>
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
      <div className="container text-center">
        <p><em>User profile codes can be obtained from Admin users who have already created a profile for you!<br/>Please reach out to your account administrator to receive your user ID.</em></p>
      </div>
      <br/>
      <h5>Are you the first user for your company?</h5>
      <p>Create a user profile using this form</p>
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
